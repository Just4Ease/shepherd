import {Heading, HStack} from "native-base";
import {IonIcon} from "@ionic/react";
import {bookmark, star} from "ionicons/icons";

const LectureCard = () => {
    return (
        <div className={"shadow-md w-auto md:w-[450px] my-5 mx-auto rounded-sm p-2"}>
            <HStack>
                <div className={"bg-green-400 rounded-md h-100 w-4/12 teacher-cover"}></div>
                <div className={"ml-3 w-6/12 space-y-1 flex flex-col justify-start items-start"}>
                    <IonIcon icon={bookmark} className={"text-gray-400 right-0 absolute text-xl"}/>
                    <div>
                        <Heading>Leslie A. Peters</Heading>
                        <h4>Bsc Economics (Bachelors)</h4>
                        <p className={"text-sm text-gray-600"}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad autem debitis dolores
                            eligendi
                            eveniet
                        </p>
                    </div>
                    <div className={"flex flex-row align-middle items-center justify-between w-100"}>
                        <div className={"text-xl items-start font-bold"}>$22.00/hr</div>
                        <div className={"text-sm items-center right-0 absolute align-middle"}>
                            <IonIcon icon={star} className={"text-yellow-400"}/>
                            <span>4.2(175)</span>
                        </div>
                    </div>
                </div>
            </HStack>
        </div>
    )
}

export default LectureCard