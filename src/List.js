function List({ layout,items }){

    const listItems = () => {
        const listItems = [];
        if(layout == 'numbered')
        {
            for (let i = 0; i < items ; i ++){
                listItems.push(<li key={i} >numbered</li>)
            }
            return <ol>{listItems}</ol>
        }
        if(layout == 'bullet')
        {
            for (let i = 0; i < items ; i ++){
                listItems.push(<li key={i}>bullet</li>)
            }
            return <ul>{listItems}</ul>
        }
    }

    return (
        <>
           {listItems()}
        </>
    )
}

export default List;