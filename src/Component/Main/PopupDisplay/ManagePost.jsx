import React, { useContext } from 'react'
import { AppContext } from '../../../Context/AppContext'

function ManagePost() {
    const { 
        posts, 
        managePostActive, 
        setManagePostActive,
        handleDelete, 
        handleFormEdit } = useContext(AppContext);

  return (
    <>
        {managePostActive &&
            <div className='manage-posts top-wrapper'>
            <button className="back-to-dashboard"  onClick={()=> setManagePostActive(!managePostActive)}>BACK😊</button>
                <h2>Manage Post</h2>
                <div className="post-container">
                    <div className="table-wrapper">
                        <table>
                            <thead>
                                <tr>
                                    <th>PostId</th>
                                    <th>Post Title</th>
                                    <th>Thumbnail</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {posts && posts.map((post) => 
                                    <tr key={post.postId}>
                                        <td>{post.postId}</td>
                                        <td className='post-title'>{post.title}</td>
                                        <td className='post-thumbnail'><img src={post.thumbnail} alt="" /></td>
                                        <td className='post-action'>
                                            <span>
                                                <button className='edit-post' onClick={() => handleFormEdit(post.postId)}>🔱</button>
                                                <button className='delete-post' onClick={() => handleDelete(post.postId)}>❌</button>
                                            </span>
                                        </td>

                                    </tr>
                                )}
                                <tr>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        }
    </>
  )
}

export default ManagePost
