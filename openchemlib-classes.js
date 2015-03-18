var classes = [
    // Requirements for Core
    'chem/AromaticityResolver',
    'chem/AtomFunctionAnalyzer',
    'chem/AtomTypeCalculator',
    'chem/Canonizer',
    'chem/CanonizerBaseValue',
    'chem/CanonizerMesoHelper',
    'chem/CoordinateInventor',
    'chem/ExtendedMolecule',
    'chem/IDCodeParser',
    'chem/IsotopeHelper',
    'chem/MolecularFormula',
    'chem/Molecule',
    'chem/MolfileCreator',
    'chem/MolfileParser',
    'chem/PropertyCalculator',
    'chem/RingCollection',
    'chem/SmilesCreator',
    'chem/SmilesParser',
    'chem/SortedStringList',
    'chem/SSSearcher',
    'chem/SSSearcherWithIndex',
    'chem/StereoMolecule',

    'chem/descriptor/DescriptorHandler',
    'chem/descriptor/DescriptorHandlerFactory',
    'chem/descriptor/DescriptorInfo',
    'chem/descriptor/ISimilarityCalculator',
    'chem/descriptor/ISimilarityHandlerFactory',
    'chem/descriptor/SimilarityCalculatorInfo',

    'chem/io/SDFileParser',
    'chem/io/CompoundFileParser',

    'chem/prediction/CLogPPredictor',
    'chem/prediction/PolarSurfaceAreaPredictor',
    'chem/prediction/ParameterizedStringList',
    'chem/prediction/SolubilityPredictor',

    'util/Angle',
    'util/SortedList'
];

module.exports = classes.map(function (file) {
    return 'com/actelion/research/' + file + '.java';
});
