
import './../styles/todos.scss';
import icon from '../assets/images/icons/mutilply_white.png'
const Todo = (props) => {
    const {todos, deleteDataTodos, title} = props
       console.log('>>>prop', props)
    const handleDelete = (id) => {
        deleteDataTodos(id)
        // alert(id)
    }
    return (
        <div className='container'>
            {title && <h2>{title}</h2>}
            {todos.map((todo) => {
                return (
                    <div key={todo.id} className='container_child'>
                            <li className='todo_child'>
                                {todo.name}
                            </li>
                           <img src={icon} className='icon_multiply' onClick={() => handleDelete(todo.id)}></img>
                    </div>
                );
            })}
        </div>
    )
}

export default Todo;