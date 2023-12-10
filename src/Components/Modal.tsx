import { useId } from "react";
import BookDetails from "./BookDetails";
import { BookForm } from "./BookForm";

export const Modal:React.FC<any> = ({setCurrentBook, books, currentBook, currentAction, closeModal, setBooks}) => {
	const formId = useId()
	const deleteBook = (e:any) => {
		e.preventDefault();
		let formData = new FormData(e.target)
		let book:any = {};
		
		for (const pair of formData.entries()) {
			book[pair[0]] = pair[1]
		}

		if(
			Object.keys(book).includes('name') && 
			book.name === books.find((book:any) => book.isbn === currentBook).name
		) {
			setBooks((books:any) => books.filter((book:any) => book.isbn !== currentBook))
		}
		
		closeModal();
		setCurrentBook('')	

	}
	return (
		<div style={{ display: 'block' }} className="modal" role="dialog" tabIndex={-1} >
			<div role='document' className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
				<div className="modal-content">
					<div className="modal-header">
					<h1 className="modal-title fs-5" id="exampleModalLabel">
						{ currentAction === 'add' ? 
								'Add Book' 
							: currentAction === 'edit' ? 
								'Edit Book' 
							: currentAction ==='delete' ? 
								'Delete Book' 
						: 	'Book Details'}
					</h1>
					<button 
						type="button" 
						className="btn-close"  
						onClick={() => {closeModal();setCurrentBook()}}
						aria-label="Close"
					></button>
					</div>
					<div className="modal-body">
						{ currentAction === 'delete' ? 
							<div>
								To Confirm, write the name of the book,
								<form id={formId} onSubmit={(e) => deleteBook(e)} >
									<input name="name" />
								</form>
							</div>
						: 	currentAction === 'show' ? 
							<BookDetails currentBook={currentBook} books={books} />
						:	<BookForm
								books={books}
								currentAction={currentAction}
								currentBook={currentBook} 
								closeModal={closeModal} 
								setBooks={setBooks} 
								formId={formId} 
								setCurrentBook={setCurrentBook}
							/>
						}
					</div>
					<div className="modal-footer">
					<button 
						type="button" 
						onClick={() => {closeModal();setCurrentBook('');}} 
						className="btn btn-secondary"
					>
						{ currentAction === 'delete' ? 'Cancel' : 'Close'}
					</button>
					{ currentAction !== 'show' ? <button 
						form={formId} type='submit' data-bs-dismiss="modal" 
						className="btn btn-primary"
					>
						{ currentAction === 'delete' ? 'Delete' : 'Save changes'}
					</button> : <></> }
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal