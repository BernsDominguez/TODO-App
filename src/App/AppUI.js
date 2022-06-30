import React from 'react';
// Importamos nuestro contexto
import { TodoHeader } from '../TodoHeader';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoError } from '../TodoError';
import { TodoLoading } from '../TodoLoading';
import { EmptyTodos} from '../EmptyTodos';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        switchCloseButton,
        } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoHeader />
            <TodoCounter />
            <TodoSearch />
            
            <TodoList>
                {error && <TodoError error={error}/>}
                {loading && <TodoLoading />}
                {(!loading && !searchedTodos.length) && <EmptyTodos />}
                
                {searchedTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton
                openModal={openModal}
                setOpenModal={setOpenModal}
                switchCloseButton={switchCloseButton}
            />
        </React.Fragment>
    );
}

export { AppUI };