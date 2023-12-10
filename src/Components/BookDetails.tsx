import { toTitleCase } from "../utils/helpers"

const BookDetails:React.FC<any> = ({currentBook, books}) => {
	let currentBookDetails = books.find((book:any) => book.isbn === currentBook)
  	return (
		<div style={{ display:'grid',  gridTemplateColumns:'repeat(2, 1fr)' }} >{
			Object.keys(currentBookDetails).map(key => {
				return (
					<div style={{marginBottom:'10px', display:'flex', flexDirection:'column' }}>
						<span style={{fontWeight:'bold', marginBottom:'3px'}} >
							{key === 'isbn' ? key.toLocaleUpperCase() : toTitleCase(key)}
						</span>
						<span style={{marginLeft:'5px'}} >
							{ key === 'availability' ? currentBookDetails[key] ? 'True' : 'False' : currentBookDetails[key]}
						</span>
					</div>
				)
			})}
		</div>
	)
}

export default BookDetails