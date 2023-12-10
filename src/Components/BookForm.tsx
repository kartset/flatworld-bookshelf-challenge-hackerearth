export const BookForm:React.FC<any> = ({
	setCurrentBook, 
	currentAction, 
	books, 
	currentBook, 
	closeModal, 
	setBooks, 
	formId
}) => {
	
	let currentBookDetails = books.find((book:any) => book.isbn === currentBook)
	
	const addBook = (e:any) => {
		e.preventDefault()

		let newBook:any;
		let formData = new FormData(e.target)
		
		for (const pair of formData.entries()) {
			newBook[pair[0]] = pair[1]
		}
		
		if( newBook !== null ) {
			setBooks((books:any) => [...books, newBook])
		}
		closeModal()

	}
	
	const editBook = (e:any) => {
		e.preventDefault()
		let existingBook = currentBookDetails;
		let formData = new FormData(e.target)
		
		for (const pair of formData.entries()) {
			existingBook[pair[0]] = pair[1]
		}

		setBooks((books:any) => (
			books.map((book:any) => {
				if(book.isbn === currentBook) {
					return existingBook
				} else {
					return book
				}
			})
		))
		closeModal()
		setCurrentBook('')	
	}
	return (
		<form 
			style={{ 
				display:'grid', gap:'15px', 
				gridTemplateColumns:'repeat(2, 1fr)' 
			}}
			id={formId} 
			onSubmit={(e) => { currentAction === 'add' ? addBook(e) : editBook(e)}} 
		>
          <div className="mb-3">
            <label className="col-form-label">ISBN No:</label>
            <input 
				defaultValue={currentBookDetails ? currentBookDetails.isbn : ''} 
				required name='isbn' type="text" className="form-control" id="isbn" 
			/>
          </div>
          <div className="mb-3">
            <label className="col-form-label">Book Name:</label>
            <input 
				defaultValue={currentBookDetails ? currentBookDetails.name : ''} 
				required name='name' type='text' className="form-control" id="name" 
			/>
          </div>
		  <div className="mb-3">
            <label className="col-form-label">Book Category:</label>
            <input 
				defaultValue={currentBookDetails ? currentBookDetails.category : ''} 
				required name='category' type='text' className="form-control" id="category" 
			/>
          </div>
		  <div className="mb-3">
            <label className="col-form-label">Row No for Book:</label>
            <input 
				defaultValue={currentBookDetails ? currentBookDetails.row : ''} 
				required name='row' type='number' className="form-control" id="row" 
			/>
          </div>
		  <div className="mb-3">
            <label className="col-form-label">Book Count:</label>
            <input 
				defaultValue={currentBookDetails ? currentBookDetails.count : ''} 
				required name='count' type='number' className="form-control" id="count" 
			/>
          </div>
		  <div className="mb-3">
            <label className="col-form-label">Cost per Book:</label>
            <input 
				defaultValue={currentBookDetails ? currentBookDetails.cost : ''} 
				required name='cost' type='number' className="form-control" id="cost" 
			/>
          </div>
		  <div className="mb-3">
        	<label className="col-form-label">Book Availability:</label>
            <input 
				defaultValue={currentBookDetails ? currentBookDetails.availability : ''} 
				required name='availability' className="form-control" id="availability" 
			/>
          </div>
        </form>
	)
}