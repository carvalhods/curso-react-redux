import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {
    const keyHandler = (ev) => {
        if (ev.key === 'Enter') {
            ev.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if (ev.key === 'Escape') {
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
            <Grid cols='12 9 10'>
                <input id='description' className='form-control'
                    placeholder='Adicione uma tarefa'
                    onChange={props.handleChange}
                    onKeyUp={keyHandler}
                    value={props.description}>
                </input>
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus'
                    onClick={props.handleAdd}></IconButton>
                <IconButton style='info' icon='search'
                    onClick={props.handleSearch} />
                <IconButton style='default' icon='close'
                    onClick={props.handleClear} />
            </Grid>
        </div>
    )
}