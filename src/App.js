import './assets/css/main.css';
import {Divider, Heading, NativeBaseProvider} from "native-base";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Filters from "./components/Filters";
import LectureCard from "./components/Card";

const Cards = [];
for (let i = 0; i < 12; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    Cards.push(<LectureCard key={i}/>);
}

function App() {
    return (
        <NativeBaseProvider>
            <div className={"px-5"}>
                <Header/>
                <div className={"top-24 absolute left-0 right-0 px-5"}>
                    <hr/>
                    <Banner/>
                    <Divider/>
                    <Filters/>
                    <div className={"items-start justify-start absolute"}>
                        <Heading>304 Tutors Available</Heading>
                        <div className={"flex flex-row flex-wrap"}>
                            {Cards}
                        </div>
                    </div>
                </div>
            </div>
        </NativeBaseProvider>
    );
}

export default App;
