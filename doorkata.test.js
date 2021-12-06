const Door=require('./doorkata');
const d = new Door(true,false,false,true,"123");
test('OpenAndUnlocked', () => {
    expect(d).toEqual({"IsOpen":true, "IsClosed":false, "IsLocked":false, "IsUnlocked":true, "key":"123"});

  });

const d2 = new Door(true,false,true,false,"123");
test('OpenAndLocked', () => {
    expect(d2).toEqual({"IsOpen":true, "IsClosed":false, "IsLocked":true, "IsUnlocked":false, "key":"123"});

  });
  const d3 = new Door(false,true,true,false,"123");
  test('ClosedAndlocked', () => {
      expect(d3).toEqual({"IsOpen":false, "IsClosed":true, "IsLocked":true, "IsUnlocked":false, "key":"123"});
  
    });
    const d4 = new Door(false,true,false,true,"123");
    test('ClosedAndUnlocked', () => {
        expect(d4).toEqual({"IsOpen":false, "IsClosed":true, "IsLocked":false, "IsUnlocked":true, "key":"123"});
    
      });