const PostComponent = (props) => {
  return (
    <>
    {props.children} - {props.postTitle} - <span class="w3-monospace">{props.author}</span>
    </>
  )
}
export default PostComponent