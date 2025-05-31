export default function SplitScreen({ first, second, orientation = "horizontal" }) {
    return (
        <div className={`split-screen ${orientation}`}>
            <div className="first-pane">
                {first}
            </div>
            <div className="second-pane">
                {second}
            </div>
        </div>
    );
}
