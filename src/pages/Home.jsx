import SolutionsInAction from "../components/SolutionsInAction.jsx";
import HeroSection from "../components/HeroSection.jsx";
import CaseUseCard from "../components/cards/CaseUseCard.jsx";
import SolutionsCard from "../components/cards/SolutionsCard.jsx";


export default function Home() {
    const solutionsData = [
        {
            icon: "✓",
            iconColor: "#10b981",
            iconBG: "rgba(16,185,129,0.1)",
            borderTop: "#10b981",
            name: "Validify",
            description:
                "Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, ensures coding accuracy, and maintains regulatory compliance.",
        },
        {
            icon: "⊘",
            iconColor: "#f59e0b",
            iconBG: "rgba(245,158,11,0.1)",
            borderTop: "#f59e0b",
            name: "Redactify",
            description:
                "Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining clinical context.",
        },
        {
            icon: "🗣️",
            iconColor: "#3b82f6",
            iconBG: "rgba(59,130,246,0.1)",
            borderTop: "#3b82f6",
            name: "TranscriptX",
            description:
                "Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions of patient encounters into text, understanding complex medical terminology and clinical context for superior accuracy.",
        },
        {
            icon: "📝",
            iconColor: "#ec4899",
            iconBG: "rgba(236,72,153,0.1)",
            borderTop: "#ec4899",
            name: "Chartwright",
            description:
                "Your best friend with charting – turn any normal text into a high-quality chart, delivered exactly how healthcare professionals need it with extensive customization options to match your workflow and documentation standards.",
        },
    ];
    const technologyData = [
        {
            icon: "🧠",
            title: "Sophisticated Natural Language Processing",
            description:
                "At the core of our platform is an advanced foundation model. This enables our system to grasp the nuances of clinical conversations — understanding context, recognizing intent, and accurately interpreting medical terminology. This deep comprehension allows the AI to generate clear, concise, and contextually relevant medical notes automatically.",
        },
        {
            icon: "🔄",
            title: "Learning Mode & Personalization",
            description:
                "Our AI doesn't rely on generic templates. We initiate the process by learning directly from your specific cases and workflows. The system intelligently refines its understanding and output based on your ongoing feedback. With each processed case, its accuracy and alignment with your unique clinical documentation needs become increasingly precise, ensuring a truly personalized solution.",
        },
        {
            icon: "",
            title: "Robust Data Privacy & Security",
            description:
                "Protecting sensitive health information is paramount. Our AI solutions are architected with a security-first approach, incorporating principles like 'zero trust'. We utilize robust security measures, including comprehensive encryption (both at rest and in transit) and strict, role-based access controls, to ensure data integrity and confidentiality, limiting access exclusively to authorized personnel.",
            tags: [
                {
                    icon: "🔒",
                    color: "#10b981",
                    bg: "rgba(16,185,129,0.1)",
                    border: "rgba(16,185,129,0.3)",
                    label: "HIPAA COMPLIANT",
                },
                {
                    icon: "📝",
                    color: "#818cf8",
                    bg: "rgba(79,70,229,0.1)",
                    border: "rgba(79,70,229,0.3)",
                    label: "BUSINESS ASSOCIATE AGREEMENT",
                },
            ],
        },
    ];
    const caseUseData = [
        {
            title: "Primary Care",
            description:
                "Dr SJ M.D reduced her documentation time by 52%, allowing her to see 3 more patients daily while finishing her charts before leaving the office.",
            quote:
                "This AI tool streamlines a tedious process, reduces 'click fatigue,' and helps me reclaim some sanity.",
            author: "— Dr. SJ, MD",
        },
        {
            title: "Emergency Medicine",
            description:
                "Our ED department implemented Clin Tech, resulting in more thorough documentation and a 70% decrease in chart completion time during high-volume periods. Our nurses love it.",
            quote: null,
            author: "— Emergency Department (ED) Nurse Manager",
        },
        {
            title: "Behavioral Health",
            description: null,
            quote:
                'Chartwright has been transformative for our clinic. Our therapists were drowning in documentation; We\'ve slashed average charting time to <strong>under 3 minutes per patient</strong>, freeing up hours for direct care. More importantly, we\'ve seen a significant <strong>reduction in documentation errors and compliance flags</strong>. It\'s not just faster; it\'s <em>smarter</em> documentation.',
            author: "— Clinical Director, Behavioral Health Practice",
        },
        {
            title: "Case Management",
            description: null,
            quote:
                'Honestly, with the number of patients I manage, documentation felt like a constant, losing battle. But this AI feels like getting an assistant. It takes my detailed notes and <strong>instantly</strong> creates the clear, customized charts I need. I\'m getting hours back each week – hours I can now spend directly with patients, tackling barriers, not just typing.',
            author: "— Social Worker/Case Manager",
        },
    ];


    return (
        <>
            {/*Hero Section */}
            <HeroSection />


            {/* About Section */}
            <section id="about" className="section-padding bg-slate">
                <h1 className="section-title">abot cin Technologies</h1>
                <div className="flex flex-col items-center ">
                    <div className="max-w-[1000px] mx-auto leading-[1.7] flex flex-col items-center gap-y-4 ">
                        <p>Headquartered in the Midwest, Clin Technologies is a <strong>specialized AI
                            firm</strong> that empowers healthcare providers across
                            the Midwest and beyond to conquer their most pressing operational challenges. We deliver
                            thisthrough a powerful and flexible AI platform that powers both a <strong>suite of
                                ready-to-deploy
                                solutions</strong> for documentation and compliance, and the creation of <strong>fully
                                bespoke engines</strong> for enterprise-level transformation.
                        </p>
                        <p>Our expertise lies in applying cutting-edge <strong>Large Language Models (LLMs) and machine
                            learning (ML)</strong> to
                            solve real-world challenges in healthcare documentation. We partner closely with individual
                            practitioners, clinics, and healthcare organizations, leveraging <strong>meticulously
                                gathered
                                real-world data</strong> from professionals to build the exceptionally robust and
                            uniquely
                            effective datasets that power these advanced systems. flex p-4 mb-4 text-sm text-green-800
                            rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400</p><p>This same proven AI
                        framework serves as the foundation for our enterprise partnerships. Whether you need an <strong>immediate
                            solution from our product suite</strong> or a <strong>strategic partner to build a custom
                            engine</strong> for challenges like Utilization Management, we provide the right tool for
                        the job. Our mission is to transform your data into a proprietary asset, enabling data-driven
                        decisions that <strong>eliminate administrative friction</strong> and allow you to focus on what
                        matters most.</p>
                    </div>


                </div>
            </section>

            {/*Our Solutions Section*/}
            <section id="solutions" className="section-padding bg-dark-blue">
                <h1 className="section-title">Our Solutions</h1>
                <p className={"text-center mb-6"}>Our comprehensive suite of AI-powered solutions transforms every aspect of healthcare documentation:</p>
                <SolutionsCard solutionsData={solutionsData}/>

            </section>

            {/* Solutions In Action Section */}
            <SolutionsInAction/>

            {/*Technology section */}
            <section id="technology" className="section-padding bg-dark-blue">
                <h1 className="section-title">Our Solutions</h1>
                <p className={"text-center"}>Our comprehensive suite of AI-powered solutions transforms every aspect
                    of healthcare documentation:</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] w-full mx-auto mt-[50px]">
                    {technologyData.map((item, i) => (
                        <div
                            key={i}
                            className="bg-[rgba(30,58,138,0.3)] rounded-xl p-[35px] border border-[rgba(96,165,250,0.2)] shadow-xl my-transition relative overflow-hidden hover:-translate-y-2 hover:shadow-2xl"
                        >
                            {item.icon && (
                                <div
                                    className="flex justify-center items-center w-[70px] h-[70px] bg-[rgba(59,130,246,0.1)] rounded-full mb-5 transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]">
                                    <div className="text-[30px] text-[#60a5fa]">{item.icon}</div>
                                </div>
                            )}

                            {item.tags && (
                                <div className="flex gap-[15px] flex-wrap mb-5">
                                    {item.tags.map((tag, j) => (
                                        <div
                                            key={j}
                                            className="inline-flex items-center py-[6px] px-[15px] rounded-[25px] border transition-all duration-300"
                                            style={{
                                                backgroundColor: tag.bg,
                                                borderColor: tag.border,
                                            }}
                                        >
                  <span
                      className="mr-[10px] text-[18px]"
                      style={{color: tag.color}}
                  >
                    {tag.icon}
                  </span>
                                            <span
                                                className="text-white font-semibold text-[0.833rem] tracking-[0.05em]">
                    {tag.label}
                  </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <h3 className="text-[1.728rem] font-semibold text-[#60a5fa] mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4">
                                {item.title}
                            </h3>
                            <p className="text-slate-300">{item.description}</p>
                        </div>
                    ))}
                </div>

            </section>

            <sectino id="benefits" className="section-padding bg-slate flex flex-col gap-5">
                <h1 className="section-title">benefits</h1>
                <div className="max-w-[1000px] w-full mx-auto text-left px-4 md:px-6">
                    <p className="mb-4">Healthcare providers using Clin Technologies solutions report:</p>
                    <ul className="mb-8 pl-8 list-disc text-white space-y-2 w-full">
                        <li>Reduction in documentation time by 40-60%</li>
                        <li>Improved work-life balance with less after-hours charting</li>
                        <li>Enhanced patient interaction due to less focus on note-taking</li>
                        <li>More comprehensive and consistent clinical documentation</li>
                        <li>Reduced risk of documentation errors and omissions</li>
                    </ul>
                    <div className="flex justify-center items-center w-full gap-5 mt-[30px] md:flex-row flex-col">
                        <a href="/login"
                           className="bg-transparent border-2 border-[#3b82f6] text-white px-8 py-4 rounded-full hover:bg-[rgba(59,130,246,0.1)] transition-colors shadow-[0_5px_15px_rgba(37,99,235,0.2)] inline-block text-center">Login</a>
                        <a href="/signUp"
                           className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-8 py-4 rounded-full hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)] transition-all shadow-[0_5px_15px_rgba(37,99,235,0.4)] relative overflow-hidden z-1 inline-block text-center">Signup</a>
                    </div>
                </div>
            </sectino>

            {/*Case Use section*/}
            <section id="case-use" className="section-padding bg-dark-blue">
                <h1 className={"section-title"}>Case Use</h1>
                <p className={"text-center"}>Our comprehensive suite of AI-powered solutions transforms every aspect of
                    healthcare documentation:</p>
                <CaseUseCard caseUseData={caseUseData} />

            </section>

            {/* Contact Section */}
            <section>
                <div id="contact" className={"section-padding bg-slate"}>
                    <div className="max-w-[1000px] mx-auto flex flex-col items-center gap-y-8 md:gap-y-10">
                        <h2 className={"section-title"}>get started</h2>
                        <p className={"text-center tracking-wide  "}>Ready to transform your clinical documentation
                            process? Contact our team to learn how Clin Technologies can be tailored to your
                            specific
                            healthcare setting.
                        </p>
                        <div
                            className="max-w-[600px] mx-auto bg-[#1e293b] p-8 rounded-xl shadow-lg border border-[rgba(96,165,250,0.2)]">
                            <div className="mt-8 text-center">
                                <p className="text-[#94a3b8]">
                                Or reach us directly via email at{' '}
                                    <a
                                        href="mailto:support@clintechso.com"
                                        className="text-[#60a5fa] hover:underline"
                                    >
                                        support@clintechso.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
