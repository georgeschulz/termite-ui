import TargetLayout from "../components/TargetLayout";

function Termites() {
    return (
        <TargetLayout
            type="termites"
            title="Uh Oh! It looks like you have termites!"
            link="https://www.bettertermite.com/northern-virginia-termite-control/"
            subheader="Find Out Whether That Pest You Found is an Ant or a Termite Eating Your Home"
        >
            <p className="w-full">Every moment termites are in your home, they are doing damage to your home's structure and causing damange.</p>
            <p className="w-full">You should take immediate action and book an estimate to have the termites removed. This is a <b>free</b> and easy process, usually taking less than an hour!</p>
            <p className="w-full">However, waiting to take action can mean the actual repair costs are higher than if you waited.</p>
            <p className="w-full">New customers get $200 off their treatment and a free estimate. Click below to book an estimate and claim the coupoun!</p>
        </TargetLayout>
    )
}

export default Termites;