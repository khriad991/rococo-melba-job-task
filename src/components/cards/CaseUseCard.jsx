
const CaseUseCard = ({ caseUseData }) => {
    if (!caseUseData || caseUseData.length === 0) {
        return (
            <div className="text-center py-10">
                <p className="!text-title font-bold text-[1.5rem] md:text-[2rem] text-center ">No case studies available</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 py-8">
            {caseUseData.map((item, i) => (
                <div key={i}
                    className="bg-navy rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl my-transition relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl">
                    <h3 className="text-[1.44rem] font-semibold text-[#60a5fa] mt-0 mb-4">{item.title}</h3>
                    {item.description && <p>{item.description}</p>}
                    {item.quote && (
                        <p
                            className="italic text-white mb-2 mt-6 pl-4 border-l-[3px] border-[rgba(96,165,250,0.3)]"
                            dangerouslySetInnerHTML={{__html: `"${item.quote}"`}}
                        />
                    )}

                    {/* Author */}
                    {item.author && (
                        <p className="italic text-right text-[#94a3b8] mt-2.5 text-[0.833rem] font-medium">
                            {item.author}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default CaseUseCard;
