const Door=require('./doorkata');
const d = new Door(true,false,false,true,"123");
test('OpenAndUnlocked', () => {
    expect(d).toEqual({"IsOpen":true, "IsClosed":false, "IsLocked":false, "IsUnlocked":true, "key":"123"});

  });
