const Door=require('./doorkata');
const d = new Door(true,false,false,true,"123");
test('OpenAndUnlocked', () => {
    expect(d).toEqual({"IsOpen":true, "IsClosed":false, "IsLocked":false, "IsUnlocked":true, "key":"123"});

  });

const d2 = new Door(true,false,true,false,"123");
test('OpenAndLocked', () => {
    expect(d2).toEqual({"IsOpen":true, "IsClosed":false, "IsLocked":true, "IsUnlocked":false, "key":"123"});

  });
  