const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jane', 505, 'jane@gmail.com', 'webdevjane');
    expect(typeof(engineer)).toBe('object');
});

test('gets engineer github value', () => {
    const githubName = 'webdevjane'
    const engineer = new Engineer('Jane', 505, 'jane@gmail.com', githubName);
    expect(engineer.github).toEqual(githubName);
});

test('gets employee status', () => {
    const engineer = new Engineer('Jane', 505, 'jane@gmail.com', 'webdevjane');
    expect(engineer.stateRole()).toEqual("Engineer");
}); 