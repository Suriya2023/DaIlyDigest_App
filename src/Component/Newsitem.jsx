import React from 'react'

function Newsitem(props) {
    let { title, description, imageUrl, newsUrl, author, date,source} = props;

    return (
        <div>
            <div className='my-3'>
                <div className="card" style={{}}>
                    <img src={imageUrl ? imageUrl : "https://th.bing.com/th/id/OIP.2Yl82xphvP0N_GO982HQlAHaE8?w=227&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}....</h5>
                        <p className="card-text">{description}.... <span className="position-absolute top-0 start-70 translate-middle bs-primary badge rounded-pill bg-danger">
                            {source}
                        </span> </p>
                        <p className="card-text"><small className="text-body-secondary"> By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsitem
