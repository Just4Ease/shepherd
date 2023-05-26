import {IonIcon} from "@ionic/react";
import {addSharp, chevronDownSharp, notifications, removeSharp, searchOutline} from "ionicons/icons";

const SearchBar = () => {
    return (
        <div
            className={"align-middle items-center flex flex-row border-2 border-gray-200 px-2 rounded-md bg-white h-10"}>
            <IonIcon icon={searchOutline} className={"text-xl"}/>
            <input type="text" placeholder={"Search by name"} className={"border-none outline-none"}/>
        </div>
    )
}

const CreateLectureButton = () => {
    return (
        <button
            className={"bg-blue-500 px-2 flex flex-row justify-center align-middle items-center rounded-md h-8 text-white"}>
            <IonIcon icon={addSharp}/>
            <span className={"text-xs md:text-sm"}>Create New</span>
        </button>
    )
}

const NotificationBell = () => {
    return (
        <button
            className={"w-8 h-8 align-middle items-center justify-center bg-transparent border-gray-300 border-2 rounded-[100%] p-1 mr-2"}>
            <IonIcon icon={notifications} className={"text-gray-600 text-xl"}/>
        </button>
    )
}

const UserProfileDropdown = () => {
    return (
        <div className={"bg-gray-100 w-36 h-8 rounded-[14px] align-middle flex flex-row text-xs py-2 px-2 space-x-2 cursor-pointer"}>
            <img src="//ui-avatars.com/api/?name=Liam" alt="profile.png" className="profile-img"/>
            <p>Liam Kelly</p>
            <IonIcon icon={chevronDownSharp}/>
        </div>
    )
}
const Header = () => {
    return (
        <div className={"top-0 fixed " +
            "p-5 flex flex-row align-middle " +
            "justify-between left-0 right-0 z-50 " +
            "bg-white shadow-sm flex-wrap"}>
            <SearchBar/>

            <div className={"flex flex-row mt-5 md:mt-0"}>
                <CreateLectureButton/>
                <IonIcon icon={removeSharp} className={"text-gray-400 text-4xl rotate-90"}/>
                <NotificationBell/>
                &nbsp;
                <UserProfileDropdown/>
            </div>
        </div>
    )
}

export default Header