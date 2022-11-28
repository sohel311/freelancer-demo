import patternBg from '../../assets/images/pattern-big-yellow.png';

const SectionHeaderComponent = ({ title }) => {
    return (
        <div className="section_header" style={{backgroundImage: `url(${patternBg})`}}>
            <div className="container">
                <h2>Searching for “Web Designer”</h2>
            </div>
        </div>
    )
}

export default SectionHeaderComponent;