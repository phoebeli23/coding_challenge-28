const fs = require('fs');
const path = require('path');

let langFilesArray = fs.readdirSync(path.join(__dirname, "../json/languages"));

for(let i=0; i<langFilesArray.length; i++) {

  let currentLang = require(`../json/languages/${langFilesArray[i]}/${langFilesArray[i]}`);

  describe(`Testing ${langFilesArray[i]}`, () => {
    it('check json', () => {
      const parseJson = () => {
          const json = JSON.stringify(currentLang);
          JSON.parse(json);
      };
      expect(parseJson).not.toThrow();
    })

    describe('string value test', () => {
    	it('Language name', async () => {
    		await expect(currentLang.name.length).toBeGreaterThan(0)
    	})
    	it('Language short description', async () => {
    		await expect(currentLang.description_short.length).toBeGreaterThan(0)
    	})
    	it('Language description', async () => {
    		await expect(currentLang.description.length).toBeGreaterThan(0)
    	})
    	it('Language developer', async () => {
    		await expect(currentLang.developed_by.length).toBeGreaterThan(0)
    	})
    })

  })
}
