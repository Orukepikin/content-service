const fs = require('fs');
const path = require('path');

// Helper function to convert kebab-case to Title Case
function toTitleCase(str) {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Read the JSON data
const jsonData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../../nigerian-wards-afeibukun.json'), 'utf8')
);

// Transform the data
const transformedData = jsonData.map(stateObj => {
    return {
        state: toTitleCase(stateObj.state),
        lgas: stateObj.lgas.map(lgaObj => {
            return {
                name: toTitleCase(lgaObj.lga),
                wards: lgaObj.wards.map(ward => toTitleCase(ward))
            };
        })
    };
});

// Generate TypeScript file content
let tsContent = `// Nigerian States, LGAs and Wards data
// Total: 37 States, 774 LGAs, 8,813 Wards
// Source: https://github.com/afeibukun/nigerian-state-lgas-wards-polling-units

export type Ward = string;

export type LGA = {
    name: string;
    wards: Ward[];
};

export type State = {
    state: string;
    lgas: LGA[];
};

export const nigeriaWardsData: State[] = `;

tsContent += JSON.stringify(transformedData, null, 4);
tsContent += ';\n';

// Write the TypeScript file
fs.writeFileSync(
    path.join(__dirname, 'nigeria-states-lgas-wards.ts'),
    tsContent,
    'utf8'
);

console.log('✅ Successfully generated nigeria-states-lgas-wards.ts');
console.log(`📊 Total states: ${transformedData.length}`);
console.log(`📊 Total LGAs: ${transformedData.reduce((sum, s) => sum + s.lgas.length, 0)}`);
console.log(`📊 Total wards: ${transformedData.reduce((sum, s) => sum + s.lgas.reduce((lsum, l) => lsum + l.wards.length, 0), 0)}`);
