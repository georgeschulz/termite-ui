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
                <p className='text-white'>{subheader}</p>
            </Header>
            <ContentContainer>
                <section className='pt-12 px-16'>
                    <H2>{title}</H2>
                    <Subheader>Probability you have {type}: {searchParams.get('probability')}%</Subheader>
                    <div className="justify-center flex mt-8">
                        <div className="w-2/3 flex flex-wrap leading-8">
                            {children}
                        </div>
                    </div>
                    <div className="mt-4 flex justify-center">
                        <a href={link} className="text-white font-bold py-4 px-6 rounded text-lg" style={{'backgroundColor': '#75bc60'}}>Book an Estimate</a>
                    </div>
                </section>

            </ContentContainer>
        </div>
    )
}

export default TargetLayout;