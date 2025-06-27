
import React, { useState, useRef, useEffect } from 'react';

const SolutionsInAction = () => {
    const [activeTab, setActiveTab] = useState('TranscriptX');
    const [activeExample, setActiveExample] = useState(0);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [sliderPosition, setSliderPosition] = useState(50.78);
    const sliderRef = useRef(null);
    const isDragging = useRef(false);

    const mainTabs = ['TranscriptX', 'Chartwright', 'Redactify', 'Validify'];
    const examples = ['Example 1', 'Example 2', 'Example 3', 'Example 4'];

    // Example data - you can expand this with more examples
    const exampleData = {
        'TranscriptX': [
            {
                title: "Experience TranscriptX - Effortless, Accurate Medical Transcription",
                before: `"Okay, uh, patient is Sarah Chen, DOB 3/22/1978. Seen today, October 26th, 2023. Chief complaint... uh... right knee pain, ongoing for about 3 months, worse with activity, especially stairs...`,
                before_title:"Doctor's Dictation (Audio Input Simulation)",
                after: `Patient: Sarah Chen\n\nDOB: 03/22/1978\n\nDate of Service: October 26, 2023\n\n### Chief Complaint:\nRight knee pain x 3 months.\n\n### Subjective:\nPatient reports right knee pain ongoing for approximately 3 months...`,
                after_title:"Chartwright-Enhanced Chart",
            }

        ]
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        isDragging.current = true;
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;

        const container = sliderRef.current;
        const containerRect = container.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        const percentage = Math.min(100, Math.max(0, (x / containerRect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const nextExample = () => {
        setActiveExample(prev => (prev + 1) % examples.length);
    };

    const prevExample = () => {
        setActiveExample(prev => (prev - 1 + examples.length) % examples.length);
    };

    // Cleanup event listeners
    useEffect(() => {
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <section id="action" className="section-padding bg-slate">

            <div className=" mx-auto px-4">
                <h2 className="section-title">See Our Solutions in Action</h2>

                <div className="max-w-[1000px] mx-auto bg-dark-blue  rounded-xl overflow-hidden">
                    {/* Main Tabs */}
                    <div className="flex justify-between item-center flex-wrap md:flex-nowrap ">
                        {mainTabs.map((tab,i) => (
                            <button
                                key={tab}
                                className={`relative px-5 py-4 w-[45%] md:w-full font-medium hover:text-white text-base text-center border-r-[0.25px] border-r-gray-700 border-opacity-25 my-transition last-of-type:border-none ${
                                    activeTab === tab
                                        ? 'text-white  bg-slate '
                                        : 'text-gray-white bg-transparent'
                                }`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {activeTab === tab && <span className={"w-full h-[3px] bg-[#3b82f6] absolute left-0 bottom-[.5px] "}></span>}
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Collapse Toggle */}
                    <button
                        className="w-full hover:bg-[#2563eb] bg-[#3b82f6] text-white hover:text-white my-transition py-3 px-5 !duration-300 "
                        onClick={() => setIsCollapsed(!isCollapsed)}>
                        <span className={"text-base  text-center  w-full "} > Click to {isCollapsed ? 'expand' : 'collapse'} comparison</span>
                    </button>

                    {!isCollapsed && (
                        <>
                            {/* Sub Tabs */}
                            <div className="flex justify-between item-center flex-wrap md:flex-nowrap ">
                                {examples.map((example, index) => (
                                    <button
                                        key={example}
                                        className={`py-[10px] px-[15px] w-[45%] md:w-full  bg-opacity-50 hover:bg-opacity-100 my-transition !duration-300 border-r-[0.25px] border-r-gray-700 border-opacity-25 last-of-type:border-none ${
                                            index === activeExample
                                                ? 'text-white bg-[#3b82f6]'
                                                : 'text-blue-600 bg-slate hover:text-white'
                                        }`}
                                        onClick={() => setActiveExample(index)}
                                    >
                                        {example}
                                    </button>
                                ))}
                            </div>

                            {/* Content Section */}
                            <div className={"bg-dark-blue pb-1.5 mx-[1px]"}>
                                <h3 className="text-xl font-semibold text-white py-5 px-[25px]">
                                    {exampleData[activeTab]?.[activeExample]?.title || 'Example'}
                                </h3>

                                <div
                                    ref={sliderRef}
                                    className="relative h-[600px] bg-gray-900 rounded-lg overflow-hidden ">

                                    {/* Before Panel */}
                                    <div
                                        className="absolute top-0 left-0 bottom-0 bg-dark-blue overflow-y-auto"
                                        style={{ width: `${sliderPosition}%` }}>

                                        <div className="flex justify-between items-center bg-[#14274C] py-4 px-4 text-[#3b82f6] border-y border-gray-600 border-opacity-25 ">
                                            <span className="font-medium">Doctor's Dictation</span>
                                            <span className="text-xs">Audio Input</span>
                                        </div>
                                        <div className="text-gray-300 whitespace-pre-line py-3 px-5">
                                            <h3 className={"text-[1.2em] text-[#f8fafc] font-bold border-b border-gray-700 border-opacity-25 py-3 mb-2"}>{exampleData[activeTab]?.[activeExample]?.before_title}</h3>
                                            {exampleData[activeTab]?.[activeExample]?.before}
                                        </div>
                                    </div>

                                    {/* After Panel */}
                                    <div
                                        className="absolute top-0 right-0 bottom-0 bg-dark-blue overflow-y-auto"
                                        style={{ left: `${sliderPosition}%` }}
                                    >
                                        <div className="flex justify-between items-center mb-4 text-[#f59e0b] bg-[#392D1D] py-4 px-4 text-[#3b82f6] border-y border-gray-600 border-opacity-25">
                                            <span className="font-medium">{activeTab} Note</span>
                                            <span className="text-xs ">AI-Generated Output</span>
                                        </div>
                                        <div className="text-white whitespace-pre-line -py-6 px-5">
                                            <h3 className={"text-[1.2em] text-[#f8fafc] font-bold border-b border-gray-700 border-opacity-25 pb-3 pt-2.5  mb-2"}>{exampleData[activeTab]?.[activeExample]?.after_title}</h3>
                                            <div
                                                className=" prose prose-invert max-w-none"
                                                dangerouslySetInnerHTML={{
                                                    __html: exampleData[activeTab]?.[activeExample]?.after
                                                        ? exampleData[activeTab][activeExample].after
                                                            .split('\n')
                                                            .map(para =>
                                                                para.startsWith('###')
                                                                    ? `<h3 class="text-blue-300 mt-4 mb-2">${para.replace('###', '')}</h3>`
                                                                    : para.startsWith('-')
                                                                        ? `<ul class="list-disc pl-5 my-2"><li>${para.substring(1)}</li></ul>`
                                                                        : `<p class="my-2">${para}</p>`
                                                            )
                                                            .join('')
                                                        : ''
                                                }}
                                            />
                                        </div>

                                    </div>

                                    {/* Slider Handle */}
                                    <div
                                        className="absolute top-0 bottom-0 w-[1px] bg-blue cursor-col-resize flex items-center justify-center z-10"
                                        style={{left: `calc(${sliderPosition}% - 8px)`}}
                                        onMouseDown={handleMouseDown}
                                    >
                                        <div
                                            className="w-8 h-8 bg-blue rounded-full flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M15 19l-7-7 7-7"/>
                                            </svg>
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M9 5l7 7-7 7"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation Arrows */}
                                <div className="flex justify-between py-2 border-t border-gray-700 border-opacity-25">
                                    <button
                                        onClick={prevExample}
                                        disabled={activeExample === 0}
                                        className={`md:ml-4 px-4 py-2 rounded flex items-center hover:bg-gray-700 my-transition ${
                                            activeExample === 0
                                                ? 'bg-slate bg-opacity-50 text-blue cursor-not-allowed'
                                                : 'text-blue '
                                        }`}
                                    >
                                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                        </svg>
                                        Previous Example
                                    </button>

                                    <button
                                        onClick={nextExample}
                                        disabled={activeExample === examples.length - 1}
                                        className={`md:mr-4 px-4 py-2 rounded flex items-center hover:bg-gray-700 my-transition !duration-300 ${
                                            activeExample === examples.length - 1
                                                ? 'text-blue cursor-not-allowed'
                                                : ' text-blue '
                                        }`}
                                    >
                                        Next Example
                                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SolutionsInAction;