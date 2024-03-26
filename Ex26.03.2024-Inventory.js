function inventory(input) {
    let heroArr = [];

    for (let line of input) {
        line = line.split(` / `);
        let objectHero = {};
        let heroName = line.shift();
        objectHero.name = heroName;

        let heroLevel = line.shift();
        objectHero.level = heroLevel;

        let heroItems = line.shift();
        objectHero.items = heroItems;
        heroArr.push(objectHero);
    }


    let sortedArr = heroArr.sort((a, b) => a.level - b.level);
    for (let hero of sortedArr) {
        console.log(`Hero: ${hero.name}${(`\n`)}level => ${hero.level}${(`\n`)}items => ${hero.items}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);