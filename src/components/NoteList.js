import react from "react";
import { useEffect, useState } from "react";
import API from "../Api/Api";
import NoteListCard from "./NoteListCard";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react"
import { Textarea } from "@chakra-ui/react" 
import { Input } from "@chakra-ui/react"
function NoteList() {
  const [list, setList] = useState();
  const [tabs,setTabs]=useState();
  const [tabPanels,setTabpanels]=useState()
  useEffect(() => {
    const result = API();
    result.then((res) => {
      
      var temp=res.map(item=>{
         return <Tab>{item.title}</Tab>
      })
      setTabs(temp)
        temp=res.map(item=>{
         return <TabPanel>
           <Input value={item.title} variant="unstyled" size="lg" />
           <Textarea value={item.text}  size="lg"/>
    
           </TabPanel>
      })
      setTabpanels(temp)
    });
  }, []);

  return (
    <div>
      <Tabs variant="soft-square"  orientation={"vertical"}>
        <TabList>
          {tabs}
        </TabList>

        <TabPanels>
          {tabPanels}
        </TabPanels>
      </Tabs>
    </div>
  );
}
export default NoteList;
