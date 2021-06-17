import react from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { StylesProvider } from '@chakra-ui/system'

const NoteListCard=(item)=>{
const data=item.data
console.log(data)
console.log(data._id)

return(
    <li key={data._id}>{data.title}</li>
   // <StylesProvider>
    //<Tab key={data._id}>{data.title}</Tab>
   // </StylesProvider>
)
}

export default NoteListCard;