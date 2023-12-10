export const Table:React.FC<any> = ({
    currentSearchTerm,
    setCurrentAction, 
    setCurrentBook, 
    filteredBooks, 
    openModal, 
    books, 
}) => {

    return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th style={{textAlign:'center'}} scope="col">Book Name</th>
					<th style={{textAlign:'center'}} scope="col">ISBN</th>
					<th style={{textAlign:'center'}} scope="col">Book Category</th>
					<th style={{textAlign:'center'}} scope="col">Book Row</th>
					<th style={{textAlign:'center'}} scope="col">Availability</th>
					<th style={{textAlign:'center'}} >Actions</th>
				</tr>
			</thead>
			<tbody>
				{(currentSearchTerm.length > 0 ? filteredBooks : books).map((book:any, i:any) => {
					return (
						<tr key={i} >
							<th scope="row">{i+1}</th>
							<td 
								style={{
									cursor:'pointer', textDecoration:'underline', 
									textAlign:'center'
								}}
								onClick={() => {
									openModal();
									setCurrentAction('show')
									setCurrentBook(book.isbn);
								}}
							>
								{book.name}
							</td>
							<td style={{textAlign:'center'}} >{book.isbn}</td>
							<td style={{textAlign:'center'}} >{book.category}</td>
							<td style={{textAlign:'center'}} >{book.row}</td>
							<td style={{textAlign:'center'}} >{book.availability ? 'True' : 'False' }</td>
							<td style={{display:'flex', justifyContent:'center', gap:'10px'}} >
								<button 
									type='button' className='btn btn-outline-warning btn-sm'
									onClick={() => {setCurrentAction('edit');openModal();setCurrentBook(book.isbn)}}
								>
									Edit
								</button>
								<button
									type='button' className='btn btn-outline-danger btn-sm'
									onClick={() => {setCurrentAction('delete');openModal();setCurrentBook(book.isbn)}}
								>
									Delete
								</button>
							</td>
						</tr>
					)
				})}
			</tbody>
		</table>
	)
}