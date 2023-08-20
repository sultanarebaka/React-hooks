
const data = [
    {id : '1',
     tabTitle: "Tab 1",
     tabContent: 'Tab Content 1'
    },

    {id : '2',
    tabTitle: "Tab 2",
    tabContent: 'Tab Content 2'
   },

   {id : '3',
   tabTitle: "Tab 3",
   tabContent: 'Tab Content 3'
  }

]

function Tab(props){
  
  const [visibleTab, setVisibleTab] = React.useState(props.data[0].id)
}


const listTitles = props.data.map((item) => 
     


return(
      <div className="tabs">
        <ul className="tabs-titles">
        {listTitles}
        </ul>
        <div className="tab-content">
           {listContent}
        </div>
      </div>
    )
}

}



ReactDOrem(
  document.getElementById('root')
)

      <div className="tab">
        