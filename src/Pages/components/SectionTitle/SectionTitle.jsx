const SectionTitle = ({heading, subheading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-yellow-600 mb-2">--- {heading} --</p>
            <p className="text-4xl uppercase border-y-4 py-4">{subheading}</p>
        </div>
    );
};

export default SectionTitle;