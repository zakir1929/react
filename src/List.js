function List({ layout,items }){


    const list = () => {
        const listItems = [];
        if(layout == 'numbered')
        {
            for (let i = 0; i < items ; i ++){
                listItems.push(<li>numbered</li>)
            }
            return <ol>{listItems}</ol>
        }
        if(layout == 'bullet')
        {
            for (let i = 0; i < items ; i ++){
                listItems.push(<li>bullet</li>)
            }
            return <ul>{listItems}</ul>
        }
    }
    return (
        <>
        {list()}
        </>
    )
}

export default List;