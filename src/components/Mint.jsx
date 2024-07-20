import React from 'react'
import './Mint.css';



export const Mint = () => {
  return (

    <div className='nft-div'> 
   
  <form className="nft-form" >
  <div> Mint Nft For Auction</div>
  <br/>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          // value={description}
          // onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          // value={price}
          // onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="file">Upload NFT</label>
        <input
          type="file"
          id="file"
          // onChange={handleFileChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  


    </div>
  )
}
