import { useState } from "react";
import { bookSearchFilters, initialBooks } from "../constants";
import  Modal  from "./Modal";
import { Table } from "./Table";

const View = () => {
	const [books, setBooks] = useState(initialBooks)
	const [toggleModal, setToggleModal] = useState(false)
	const [currentBook, setCurrentBook] = useState('')
	const [currentAction, setCurrentAction] = useState('add')
	const [currentSeachFilter, setCurrentSeachFilter] = useState(bookSearchFilters[1])
	const [currentSearchTerm, setCurrentSearchTerm] = useState('')
	const [filteredBooks, setFilteredBooks] = useState<any>([])
	
	const openModal = () => {
		setToggleModal(true);
	};
	const closeModal = () => {
		setToggleModal(false);
	};
	return (
		<div className="container-fluid content" style={{marginTop:'20px'}} >
			<div className='mb-5 mt-2 d-sm-flex justify-content-around' >
				<div style={{marginLeft:'15px'}} className='d-sm-flex gap-4 flex-grow-1 justify-content-center' >
					<div className=" gap-1 d-sm-flex">
						<button 
							className="btn btn-outline-secondary dropdown-toggle" 
							type="button" data-bs-toggle="dropdown" aria-expanded="false"
						>
							{currentSeachFilter.text}
						</button>
						<ul className="dropdown-menu">
							{bookSearchFilters.map(item => {
								return (
									<li
										key={item.value}
										className="dropdown-item" 
										onClick={() => {setCurrentSeachFilter(item)}} 
									>
										{item.text}
									</li>
								)
							})}
						</ul>
						<input 
							type="text" className="form-control" 
							aria-label="Text input with dropdown button" 
							placeholder='Search...'
							onChange={(e) => {
								setCurrentSearchTerm(e.target.value)
								if(e.target.value.length) {
									setFilteredBooks(
										books.filter((book:any) => book[currentSeachFilter.value].includes(e.target.value))
									)
								} else {
									setFilteredBooks([])
								}
							}}
						/>
					</div>
				</div>
				<div>
					<button 
						type="button" className="btn btn-primary"
						onClick={() => {setCurrentAction('add');openModal()}} 
					>
						Add Book
					</button>
				</div>
			</div>
			{ toggleModal && 
				<Modal 
					books={books} 
					currentBook={currentBook} 
					currentAction={currentAction} 
					closeModal={closeModal} 
					setBooks={setBooks} 
					setCurrentBook={setCurrentBook}
				/>
			}
			<Table 
				setCurrentAction={setCurrentAction} 
				openModal={openModal} 
				setCurrentBook={setCurrentBook} 
				books={books}
				filteredBooks={filteredBooks}
				currentSearchTerm={currentSearchTerm}
			/>
		</div>
	);
};

export default View