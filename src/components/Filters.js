import {IonIcon} from "@ionic/react";
import {optionsSharp} from "ionicons/icons";
import {Select} from "native-base";

const FilterOpenClose = () => {
    return (
        <div className={"items-center flex flex-row justify-start w-1/12 h-5 mx-1 rounded-md px-1"}>
            <IonIcon icon={optionsSharp} className={"rotate-90"}/>
            <p>Filter</p>
        </div>
    )
}

const Dropdown = ({placeHolder, options = [], selected = ""}) => {
    return (
        <div className={"items-center flex flex-row justify-start h-4 mx-1 my-2 bg-blue-300_ rounded-md px-1"}>
            <Select width="120" height={6}
                    rounded={8}
                    accessibilityLabel={placeHolder}
                    placeholder={placeHolder}
                    _text={{
                        fontSize: 10
                    }}
                    _selectedItem={{
                        bg: "teal.600",
                    }}>

                {/*{ // Skipped this for now  */}
                {/*    options.map(o => {*/}
                {/*        return (*/}
                {/*            <Select.Item label={o.label} value={o.value}/>*/}
                {/*        )*/}
                {/*    })*/}
                {/*}*/}
            </Select>
        </div>
    )
}


const Filters = () => {
    return (
        <div className={"items-center align-middle py-5 h-auto rounded-md flex-row flex justify-around flex-wrap"}>
            <FilterOpenClose/>
            <div className={"flex-row flex flex-wrap"}>
                <Dropdown placeHolder={"Subject"}/>
                <Dropdown placeHolder={"Level"}/>
                <Dropdown placeHolder={"Availability"}/>
                <Dropdown placeHolder={"Price"}/>
                <Dropdown placeHolder={"Rating"}/>
            </div>
            <div className={"flex-row flex items-center justify-center align-middle"}>
                <button className={"text-xs rounded-xl m-5 text-blue-600"}>Clear Filters</button>
                <button className={"text-xs bg-blue-600 p-2 rounded-xl m-5 text-white"}>Apply Filters</button>
            </div>
        </div>
    )
}

export default Filters
