import {Footer, Header, Section, TextOnlySection} from "../../containers";
import {Navbar, EventTimeline, FAQ} from "../";
import {INTRODUCTION} from "../../global-constants/LandingConstants.ts";
import {TIMELINE_DATA} from "../../global-constants/TimeLine.ts";
import {FAQ_DATA} from "../../global-constants/FAQ-Data.ts";
import {
    SPONSOR_CAREER_LINK,
    SPONSOR_COLOR, SPONSOR_CONTACTUS_LINK,
    SPONSOR_INTRODUCTION,
    SPONSOR_INTRODUCTION2, SPONSOR_SOCIALS
} from "../../global-constants/SponsorConstants.ts";
import SocialIconsWithHeader from "../social-icon/SocialIconsWithHeader.tsx";

function shuffle(array: number[]) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

const crocs = shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);


function Landing() {
    return (
        <>
            <Navbar/>
            <Header/>
            <Section name="Introduction" side="right" dino={crocs[0]} font={"font-sans"}
                     image={"assets/crocs/croc-introduction.png"}>
                <TextOnlySection
                    text={INTRODUCTION}
                    font={"font-sans"}/>
            </Section>

            <Section name="Timeline" side="left" dino={crocs[1]} font={"font-sans"}
                     image={"assets/crocs/croc-timeline.png"}>
                <EventTimeline events={TIMELINE_DATA}/>
            </Section>
            {/*{<Section name="staff">*/}
            {/*    <StaffCarousel staff={staff}/>*/}
            {/*</Section>}*/}
            <Section name="FAQ" capitalize={true} side="right" dino={crocs[3]} font={"font-sans"}
                     image={"assets/crocs/croc-faq.png"}>
                <FAQ data={FAQ_DATA}/>
            </Section>


            <div id={"sponsor"} className={"mt-12"}>
                <Section nameColor={SPONSOR_COLOR} name="درباره تپسی" side="left" dino={1} capitalize={false}
                         image={"assets/sponsor/tapsi2.jpg"} font={"font-dana-bold"}>
                    <TextOnlySection
                        text={SPONSOR_INTRODUCTION}
                        font={"font-dana-thin"}/>
                </Section>

                <Section nameColor={SPONSOR_COLOR} name="از خودت سبقت بگیر!" side="right" dino={1} capitalize={false}
                         image={"assets/sponsor/tapsi1.jpg"} font={"font-dana-bold"}>
                    <TextOnlySection
                        text={SPONSOR_INTRODUCTION2}
                        font={"font-dana-thin"}/>
                </Section>

                <div
                    className="flex bg-gray-900 pt-12 pb-4 flex-col lg:flex-row items-center justify-center gap-5 mx-auto text-center ">
                    <a href={SPONSOR_CAREER_LINK} target={"_blank"}>
                        <button
                            className="font-dana-thin bg-[#FF5B35] hover:bg-[#C74D30FF] text-white font-bold py-2 px-4 border border-[#FF5B35] rounded-lg ">
                            موقعیت‌های شغلی
                        </button>
                    </a>
                    <a href={SPONSOR_CONTACTUS_LINK} target={"_blank"}>
                        <button
                            className="font-dana-thin bg-white hover:bg-[#FFF0ECFF]  font-bold py-2 px-4 text-[#FF5B35] rounded-lg">
                            تماس با ما
                        </button>
                    </a>
                </div>

                <div className="flex bg-gray-900 flex-col items-center justify-center mx-auto text-center gap-4 pb-8">
                    <SocialIconsWithHeader data={SPONSOR_SOCIALS} showHeader={true}
                                           header={"تپسی در شبکه‌های اجتماعی"}/>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Landing;
