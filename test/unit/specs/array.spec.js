describe('Array',() =>{
    var expectTarget = []

    beforeEach(()=>{
        expectTarget.push(1)
    });

    afterEach(()=>{
        expectTarget = []
    });

    it("应该存有一个为 1 的整数",()=>{
        expect(expectTarget[0].to.eqls(1))
    });

    it("可以有多个的期望值检测",()=>{
        expect(expectTarget[0].to.eqls(true)
        )
    });
    // 测试序列
    it('应该在初始化长度为0',() => {
        // 这里编写测试代码的实现
        var arr = []
        expect(arr).to.be.lengthOf(0)
    })
})