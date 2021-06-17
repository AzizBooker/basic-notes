import react from "react";
import { useEffect, useState } from "react";
import API from "../Api/Api";
import NoteListCard from "./NoteListCard";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
function NoteList() {
  const [list, setList] = useState();
  useEffect(() => {
    const result = API();
    result.then((res) => {
      const listItems = res.map((item) => {
        return <NoteListCard data={item} />;
      });
      console.log(listItems);
      setList(listItems);
    });
  }, []);

  return (
    <div>
      <Tabs orientation={"vertical"}>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
export default NoteList;
