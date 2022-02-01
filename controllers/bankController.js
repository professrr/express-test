const AppError = require('../utils/appError')
let bank = require('../bank/money')

exports.exchange = async(req, res, next) => {
    try {
        let {money} = req.query
        money = parseInt(money)

        if(!money || money <= 0)
            throw new AppError(404, 'fail', 'Обязательный параметр money (Number, >0)')

        const data = {}
        const bank_snapshot = JSON.parse(JSON.stringify(bank))

        for(const note of bank) {
            const content = Math.floor(money / note.rate)
            const diff = content <= note.count ? content : note.count
            
            if(diff) {
                note.count -= diff
                money -= diff * note.rate
                data[note.rate] = diff
            }
            
            if(money == 0)
                break
        }
        
        if(money > 0) {
            bank = bank_snapshot
            throw new AppError(400, 'fail', 'Нет подходящих купюр')
        }

        res.status(200).json({
            status: 'success',
            data
        })
    } catch(err) {
        next(err)
    }
}