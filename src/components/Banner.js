import "../assets/css/banner.css"

const Banner = () => {
    return (
        <div className={"bg-black h-[200px] align-middle my-5 rounded-md banner"}>
            <div className={"w-[100%] bg-black px-5 pt-10 rounded-md h-[100%] bg-filter"}>
                <div className={"w-6/12 md:w-5/12"}>
                    <h1 className={"text-white text-3xl"}>Discover Top Tutors</h1>
                    <p className={"text-sm md:text-xl text-white"}>Find expert instructors to help meet your learning goals with as
                        much flexibility as you need</p>
                </div>
            </div>
        </div>
    )
}

export default Banner