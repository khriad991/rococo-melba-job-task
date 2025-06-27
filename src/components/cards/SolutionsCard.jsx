
const SolutionsCard = ({solutionsData}) => {
    if (!solutionsData || solutionsData.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="!text-title font-bold text-[1.5rem] md:text-[2rem] text-center ">No solutions Data available</p>
            </div>
        );
    }

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] w-full mx-auto">
            {solutionsData.map((item, i) => (
                <div key={i}
                     className={`bg-navy rounded-xl p-8 border-1 shadow-xl my-transition relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl`}
                     style={{borderTop: `3px solid ${item.borderTop}`}}
                >
                    <div
                        className={` inline-flex items-center justify-center w-[70px] h-[70px] rounded-full mb-5 my-transition text-[32px] hover:scale-110`}
                        style={{
                            backgroundColor: item.iconBG,
                            color: item.iconColor,
                        }}
                    >
                        {item.icon}
                    </div>
                    <h3 className="text-[1.44rem] font-semibold text-[#60a5fa] mt-0 mb-4">
                        {item.name}
                    </h3>
                    <p className="text-slate-300">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default SolutionsCard;