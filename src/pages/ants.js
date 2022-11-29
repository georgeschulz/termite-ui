import TargetLayout from "../components/TargetLayout";

function Ants() {
    return (
       <TargetLayout
            type="ants"
            title="Uh Oh! It looks like you have ants!"
            link="https://www.bettertermite.com/ant-control/"
            subheader="Here's how to eliminate pesky ants from your home!"
       >
            <p className="w-full mb-4">Ants are a common pest in Northern Virginia. They can be found in your home, in your yard, and even in your garden.</p>
            <p className="w-full mb-4">Luckily, they are easy to remove using bimonthly exterior pest control services</p>
            <p className="w-full mb-4">Want to book a free estimate? Sign up today and recieve 50% off your first service!</p>
            <br /><br />
       </TargetLayout>
    )
}

export default Ants;