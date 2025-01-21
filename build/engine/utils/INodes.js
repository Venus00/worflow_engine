"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
exports.data = {
    nodes: [
        {
            type: 'Number',
            uuid: '0004'
        },
        {
            type: 'Number',
            uuid: '0005'
        },
        {
            type: 'Number',
            uuid: '0006'
        },
        {
            type: 'Number',
            uuid: '0007'
        },
        {
            type: 'Number',
            uuid: '0008'
        },
        {
            type: 'Add',
            uuid: '0000',
        },
        {
            type: 'Minus',
            uuid: '0001',
        },
        {
            type: 'Add',
            uuid: '0002',
        },
    ],
    connections: [
        ['0004', '0007', '0000'],
        ['0006', '0001'],
        ['0007', '0002'],
        ['0008', '0000']
    ]
};
