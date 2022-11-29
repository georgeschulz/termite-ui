import ContentContainer from "./ContentContainer";
import H2 from "./H2";
import Header from "./Header";
import Subheader from "./Subheader";
import { useSearchParams } from "react-router-dom";
 
function TargetLayout ({type, title, link, subheader, children}) {
    let [searchParams] = useSearchParams();

    return (
        <div>
            <Header text='Termite or Pest Auto-Identifier'>
                <p className='text-white text-sm md:text-base'>{subheader}</p>
            </Header>
            <ContentContainer>
                <section className='pt-12 px-8 lg:px-16'>
                    <H2>{title}</H2>
                    <Subheader>Probability you have {type}: {searchParams.get('probability')}%</Subheader>
                    <div className="justify-center flex mt-8">
                        <div className="lg:w-2/3 flex flex-wrap">
                            {children}
                        </div>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <a href={link} className="text-white font-bold py-2 px-6 rounded text-lg" style={{'backgroundColor': '#75bc60'}}>Book an Estimate</a>
                    </div>
                </section>

            </ContentContainer>
        </div>
    )
}

export default TargetLayout;