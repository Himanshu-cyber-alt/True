
var search_now = document.getElementById("search_now");
var search = document.getElementById("search_btn");

search_now.addEventListener("click", () => {
    document.getElementById("SearchContainer").classList.remove("search_hide");
})

var ggits = document.getElementById("ggits_btn");
ggits.addEventListener("click", () => {
    document.getElementById("inputContainer").classList.remove("input_hide");
})

$(document).ready(function () {
    $('.input_box select').selectpicker();
})

//?     CREATING DATABSE
let entrance = {

    '1': {
        floor: 0,
        direction: 'Right',
        imag: [
            'https://i.postimg.cc/g0x1St10/Picsart-24-06-07-19-09-30-502.jpg',
            'https://i.postimg.cc/kX7z3gLz/Picsart-24-06-07-14-35-50-581.jpg'
        ]
    },
    '11': {
        floor: 0,
        direction: 'Left',
        imag: [
            'https://i.postimg.cc/vTrz25QT/Picsart-24-06-07-10-58-03-774.jpg',
            'https://i.postimg.cc/nrb213fN/Picsart-24-06-07-10-53-41-903.jpg'
        ]
    },
    '12': {
        floor: 0,
        direction: 'Left',
        imag: [
            'https://i.postimg.cc/nrb213fN/Picsart-24-06-07-10-53-41-903.jpg',
            'https://i.postimg.cc/NFs9YX65/Picsart-24-06-07-10-59-21-316.jpg'
        ]
    },
    '14': {
        floor: 0,
        direction: 'left side',
        imag: [
            'https://i.postimg.cc/wM1zhTHw/Picsart-24-06-07-11-52-08-234.jpg',
            'https://i.postimg.cc/DZynwPNk/Picsart-24-06-07-11-15-38-165.jpg'
        ]
    },
    '15': {
        floor: 0,
        direction: 'Left',
        imag: [
            'https://i.postimg.cc/DZynwPNk/Picsart-24-06-07-11-15-38-165.jpg',
            'https://i.postimg.cc/DwxKYXZx/Picsart-24-06-07-11-56-03-910.jpg'
        ]
    },
    '16': {
        floor: 0,
        direction: 'Left',
        imag: [
            'https://i.postimg.cc/DZynwPNk/Picsart-24-06-07-11-15-38-165.jpg',
            'https://i.postimg.cc/pd7MPMK8/Picsart-24-06-07-11-59-07-956.jpg',
            'https://i.postimg.cc/BbfW15Yn/Picsart-24-06-07-12-04-12-214.jpg'
        ]
    },
    '17': {
        floor: 0,
        direction: 'left',
        imag: [
            'https://i.postimg.cc/DZynwPNk/Picsart-24-06-07-11-15-38-165.jpg',
            'https://i.postimg.cc/KvFSGN39/Picsart-24-06-07-12-03-16-257.jpg'
        ]
    },
    '32': {
        floor: 0,
        direction: 'Right ',
        imag: [
            'https://i.postimg.cc/FszJ2sH5/Picsart-24-06-27-14-21-07-918.jpg',
            'https://i.postimg.cc/T1wpMCGq/Picsart-24-06-27-14-17-52-845.jpg'
        ]
    },
    '35': {
        floor: 0,
        direction: 'Right ',
        imag: [
            'https://i.postimg.cc/RZjf159r/Picsart-24-06-27-14-20-56-601.jpg',
            'https://i.postimg.cc/FK5ddygN/Picsart-24-06-27-14-13-25-741.jpg'
        ]
    },
    '101': {
        floor: 1,
        direction: 'Right And Up',
        imag: [
            'https://i.postimg.cc/ncT5HtJz/Picsart-24-06-07-14-39-15-001.jpg',
            'https://i.postimg.cc/5tQkqYFY/Picsart-24-06-07-14-45-53-586.jpg'
        ]
    },
    '102': {
        floor: 1,
        direction: 'Right and upward corner ',
        imag: [
            'https://i.postimg.cc/fRLPygzv/Picsart-24-06-07-14-42-50-696.jpg',
            'https://i.postimg.cc/rm6ZhVSh/Picsart-24-06-07-14-46-49-911.jpg'
        ]
    },
    '103': {
        floor: 1,
        direction: 'Right And Upward corner ',
        imag: [
            'https://i.postimg.cc/HndZg6vX/Picsart-24-06-07-19-19-10-045.jpg'
        ]
    },
    '105': {
        floor: 1,
        direction: 'Right and upward ',
        imag: [
            'https://i.postimg.cc/ZYxsch0c/Picsart-24-06-07-14-51-01-095.jpg'
        ]
    },
    '106': {
        floor: 1,
        direction: 'Left and upward ',
        imag: [
            'https://i.postimg.cc/rFhhBC1R/Picsart-24-06-07-14-52-09-462.jpg'
        ]
    },
    '107': {
        floor: 1,
        direction: 'Left and upward ',
        imag: [
            'https://i.postimg.cc/cLrD0gh9/Picsart-24-06-07-14-53-00-374.jpg'
        ]
    },
    '108': {
        floor: 1,
        direction: 'Left and upward ',
        imag: [
            'https://i.postimg.cc/52Ts04kx/Picsart-24-06-07-14-53-35-023.jpg',
            'https://i.postimg.cc/Twq0Cr2w/Picsart-24-06-07-17-00-52-655.jpg'
        ]
    },
    '109': {
        floor: 1,
        direction: 'Left Upward ',
        imag: [
            'https://i.postimg.cc/fyzKFJkv/Picsart-24-06-07-17-01-42-154.jpg'
        ]
    },
    '110': {
        floor: 1,
        direction: 'Left straight and upward ',
        imag: [
            'https://i.postimg.cc/8cY6H5vc/Picsart-24-06-07-17-14-14-765.jpg',
            'https://i.postimg.cc/NGCmYNnt/Picsart-24-06-07-17-21-41-133.jpg'
        ]
    },
    '111': {
        floor: 1,
        direction: 'Left straight and upward ',
        imag: [
            'https://i.postimg.cc/m2091PR6/Picsart-24-06-07-17-14-43-559.jpg',
            'https://i.postimg.cc/Z5pd8J5Y/Picsart-24-06-07-17-23-05-362.jpg'
        ]
    },
    '113': {
        floor: 1,
        direction: 'Left straight and upward ',
        imag: [
            'https://i.postimg.cc/431H0wcr/Picsart-24-06-07-17-16-02-777.jpg',
            'https://i.postimg.cc/G278L2qK/Picsart-24-06-07-17-24-46-078.jpg'
        ]
    },
    '117': {
        floor: 1,
        direction: 'Left straight and upward ',
        imag: [
            'https://i.postimg.cc/fyV3JNPN/Picsart-24-06-07-17-17-16-395.jpg',
            'https://i.postimg.cc/HnFrMNG7/Picsart-24-06-07-17-26-08-631.jpg'
        ]
    },
    '118': {
        floor: 1,
        direction: 'Left straight and upward ',
        imag: [
            'https://i.postimg.cc/KcWkC1Kv/Picsart-24-06-07-17-17-54-245.jpg',
            'https://i.postimg.cc/MKjMwzR0/Picsart-24-06-07-17-27-01-864.jpg'
        ]
    },
    '201': {
        floor: 2,
        direction: 'Right upward ',
        imag: [
            'https://i.postimg.cc/hvx60JzP/Picsart-24-06-07-22-44-07-801.jpg'
        ]
    },
    '202': {
        floor: 2,
        direction: 'Right upward ',
        imag: [
            'https://i.postimg.cc/3rDshqS5/Picsart-24-06-07-22-45-01-060.jpg'
        ]
    },
    '203': {
        floor: 2,
        direction: 'Right Upward ',
        imag: [
            'https://i.postimg.cc/cLTjTGHY/Picsart-24-06-07-22-40-57-275.jpg',
            'https://i.postimg.cc/6QmPJVCp/Picsart-24-06-07-22-48-08-385.jpg'
        ]
    },
    '204': {
        floor: 2,
        direction: 'Left and Upward ',
        imag: [
            'https://i.postimg.cc/RhgRz4Hx/Picsart-24-06-07-17-04-50-761.jpg',
            'https://i.postimg.cc/5NtgSYh4/Picsart-24-06-07-17-07-45-392.jpg'
        ]
    },
    '205': {
        floor: 2,
        direction: 'Left and Upward ',
        imag: [
            'https://i.postimg.cc/t4ZzL0R8/Picsart-24-06-07-17-05-48-648.jpg',
            'https://i.postimg.cc/fRGvsHJy/Picsart-24-06-07-17-08-45-071.jpg'
        ]
    },
    '206': {
        floor: 2,
        direction: 'Left and Upward ',
        imag: [
            'https://i.postimg.cc/q72xv83L/Picsart-24-06-07-17-06-27-942.jpg',
            'https://i.postimg.cc/FRmgd7bQ/Picsart-24-06-07-17-09-50-275.jpg'
        ]
    },
    '207': {
        floor: 2,
        direction: 'left Straight and upward ',
        imag: [
            'https://i.postimg.cc/L5cv6RTq/Picsart-24-06-07-23-12-25-732.jpg',
            'https://i.postimg.cc/ZYXhydsN/Picsart-24-06-07-23-13-52-805.jpg'
        ]
    },
    '208': {
        floor: 2,
        direction: 'left Straight and upward ',
        imag: [
            'https://i.postimg.cc/L5cv6RTq/Picsart-24-06-07-23-12-25-732.jpg',
            'https://i.postimg.cc/dVjMXSsR/Picsart-24-06-07-23-14-22-057.jpg'
        ]
    },
    '209': {
        floor: 2,
        direction: 'left Straight and upward ',
        imag: [
            'https://i.postimg.cc/L5cv6RTq/Picsart-24-06-07-23-12-25-732.jpg',
            'https://i.postimg.cc/HL6qWc7V/Picsart-24-06-07-23-14-46-553.jpg'
        ]
    },
    '210': {
        floor: 2,
        direction: 'Right upward and Left straight ',
        imag: [
            'https://i.postimg.cc/T1yH3KqJ/Picsart-24-06-07-22-28-42-429.jpg',
            'https://i.postimg.cc/sgydwJJF/Picsart-24-06-07-22-18-37-378.jpg',
            'https://i.postimg.cc/W1nRKJ9d/Picsart-24-06-07-22-24-17-270.jpg'
        ]
    },
    '211': {
        floor: 2,
        direction: 'Right upward and left straight ',
        imag: [
            'https://i.postimg.cc/T1yH3KqJ/Picsart-24-06-07-22-28-42-429.jpg',
            'https://i.postimg.cc/Y2GH90SP/Picsart-24-06-07-22-19-45-934.jpg',
            'https://i.postimg.cc/KvthPWBr/Picsart-24-06-07-22-25-03-333.jpg'
        ]
    },
    '212': {
        floor: 2,
        direction: 'Right upward and Left straight ',
        imag: [
            'https://i.postimg.cc/T1yH3KqJ/Picsart-24-06-07-22-28-42-429.jpg',
            'https://i.postimg.cc/0Q4cF8RM/Picsart-24-06-07-22-17-31-200.jpg'
        ]
    },
    '213': {
        floor: 2,
        direction: 'left Straight and upward ',
        imag: [
            'https://i.postimg.cc/L5cv6RTq/Picsart-24-06-07-23-12-25-732.jpg',
            'https://i.postimg.cc/CMB3YKMx/Picsart-24-06-07-23-15-22-637.jpg'
        ]
    },
    '214': {
        floor: 2,
        direction: 'left Straight and upward ',
        imag: [
            'https://i.postimg.cc/L5cv6RTq/Picsart-24-06-07-23-12-25-732.jpg',
            'https://i.postimg.cc/YqQTGyWc/Picsart-24-06-07-23-15-48-676.jpg'
        ]
    },
    '215': {
        floor: 2,
        direction: 'left Straight and upward ',
        imag: [
            'https://i.postimg.cc/L5cv6RTq/Picsart-24-06-07-23-12-25-732.jpg',
            'https://i.postimg.cc/T39SQL0C/Picsart-24-06-07-23-16-10-383.jpg'
        ]
    },
    '216': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/52fDxGDV/Picsart-24-06-27-10-31-54-274.jpg'
        ]
    },
    '217': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/kgwzDsdt/Picsart-24-06-27-10-32-10-340.jpg'
        ]
    },
    '218': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/7LWRnLhH/Picsart-24-06-27-10-32-53-360.jpg'
        ]
    },
    '219': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/26LKcfL4/Picsart-24-06-27-11-39-10-050.jpg'
        ]
    },
    '220': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/hvF3N3VN/Picsart-24-06-27-11-39-34-528.jpg'
        ]
    },
    '221': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/2jvtnrDY/Picsart-24-06-27-11-40-15-222.jpg'
        ]
    },
    '223': {
        floor: 2,
        direction: 'left and upward ',
        imag: [
            'https://i.postimg.cc/qvsNtQ1z/Picsart-24-06-07-17-31-00-565.jpg'
        ]
    },
    '224': {
        floor: 2,
        direction: 'left and upward ',
        imag: [
            'https://i.postimg.cc/YSthQgP8/Picsart-24-06-07-17-31-51-049.jpg'
        ]
    },
    '225': {
        floor: 2,
        direction: 'left and upward ',
        imag: [
            'https://i.postimg.cc/9f1zb052/Picsart-24-06-07-17-32-29-195.jpg'
        ]
    },
    '226': {
        floor: 2,
        direction: 'left and upward ',
        imag: [
            'https://i.postimg.cc/wvvMGzgm/Picsart-24-06-07-17-33-21-157.jpg'
        ]
    },
    '232': {
        floor: 2,
        direction: 'Right upward and left straight ',
        imag: [
            'https://i.postimg.cc/HL4qq8BJ/Picsart-24-06-07-22-28-58-532.jpg',
            'https://i.postimg.cc/d15z1PMw/Picsart-24-06-07-22-04-29-872.jpg'
        ]
    },
    '233': {
        floor: 2,
        direction: 'Right upward and left straight ',
        imag: [
            'https://i.postimg.cc/HL4qq8BJ/Picsart-24-06-07-22-28-58-532.jpg',
            'https://i.postimg.cc/Qx2vVJz9/Picsart-24-06-07-22-15-26-350.jpg'
        ]
    },
    '234': {
        floor: 2,
        direction: 'Right upward and left Straight ',
        imag: [
            'https://i.postimg.cc/HL4qq8BJ/Picsart-24-06-07-22-28-58-532.jpg',
            'https://i.postimg.cc/ZqZgxK4J/Picsart-24-06-07-22-16-16-532.jpg'
        ]
    },
    '241': {
        floor: 2,
        direction: 'Right Upward corner ',
        imag: [
            'https://i.postimg.cc/vBxNQ1vL/Picsart-24-06-07-22-49-37-978.jpg'
        ]
    },
    '242': {
        floor: 2,
        direction: 'Right Upward corner ',
        imag: [
            'https://i.postimg.cc/rsSZrv3D/Picsart-24-06-07-22-50-18-335.jpg'
        ]
    },
    '243': {
        floor: 2,
        direction: 'Right upward corner ',
        imag: [
            'https://i.postimg.cc/Hs9Ps1bK/Picsart-24-06-07-22-51-23-014.jpg'
        ]
    },
    '244': {
        floor: 2,
        direction: 'Right upward corner ',
        imag: [
            'https://i.postimg.cc/13YBfmXW/Picsart-24-06-07-22-51-47-452.jpg'
        ]
    },
    '245': {
        floor: 2,
        direction: 'Right upward above entrance ',
        imag: [
            'https://i.postimg.cc/xdJRmwb9/Picsart-24-06-07-22-53-09-114.jpg'
        ]
    },
    '311': {
        floor: 3,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/pdmvH4nd/Picsart-24-06-27-14-28-14-179.jpg'
        ]
    },
    '312': {
        floor: 3,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/nLNJc2vG/Picsart-24-06-27-14-28-28-024.jpg'
        ]
    },
    '313': {
        floor: 3,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/prHMKdc9/Picsart-24-06-27-14-28-40-448.jpg'
        ]
    },
    '315': {
        floor: 3,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/c1RS0Q6f/Picsart-24-06-27-14-29-16-458.jpg'
        ]
    },
    '316': {
        floor: 3,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/28Cf6VBM/Picsart-24-06-27-14-29-33-236.jpg'
        ]
    },
    '317': {
        floor: 3,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/rwmX13j9/Picsart-24-06-27-14-29-52-345.jpg'
        ]
    },
    '325': { floor: 3, direction: 'Front building Right upward ', imag: [] },
    '326': {
        floor: 3,
        direction: 'Front building Right upward ',
        imag: [
            'https://i.postimg.cc/mrKz445m/Picsart-24-06-23-16-12-44-564.jpg'
        ]
    },
    'Exam sell': {
        floor: 0,
        direction: 'Right',
        imag: [
            'https://i.postimg.cc/g0x1St10/Picsart-24-06-07-19-09-30-502.jpg',
            'https://i.postimg.cc/KzLwFkGS/Picsart-24-06-07-14-34-45-377.jpg'
        ]
    },
    '318(Ed hall1)': {
        floor: 3,
        direction: 'Front building Left upward ',
        imag: [
            'https://i.postimg.cc/XNR8LSNc/Picsart-24-06-23-16-01-57-631.jpg'
        ]
    },
    '319(physics lab)': {
        floor: 3,
        direction: 'Front building Left upward ',
        imag: [
            'https://i.postimg.cc/dVv9M2yh/Picsart-24-06-23-16-03-15-948.jpg'
        ]
    },
    '320 (Bme lab )': {
        floor: 3,
        direction: 'Front building Left upward ',
        imag: [
            'https://i.postimg.cc/tCdhzsMp/Picsart-24-06-23-16-03-59-695.jpg'
        ]
    },
    '321(mechanics lab)': {
        floor: 3,
        direction: 'Front building Left upward ',
        imag: [
            'https://i.postimg.cc/sXZWGxWF/Picsart-24-06-23-16-06-30-367.jpg'
        ]
    },
    '322(Ed hall 2)': {
        floor: 3,
        direction: 'Front building Left upward Corner ',
        imag: [
            'https://i.postimg.cc/XqfyxPxQ/Picsart-24-06-23-16-09-19-192.jpg'
        ]
    },
    '323( BEEE Lab)': {
        floor: 3,
        direction: 'Front building Left upward Corner ',
        imag: [
            'https://i.postimg.cc/yYTZZwDN/Picsart-24-06-23-16-10-58-786.jpg'
        ]
    },
    '324( G toilet)': {
        floor: 3,
        direction: 'Front building Left upward Corner ',
        imag: [
            'https://i.postimg.cc/t4SnrWtQ/Picsart-24-06-23-16-11-51-767.jpg'
        ]
    },
    '327( Solar lab )': {
        floor: 3,
        direction: 'Front building Right upward ',
        imag: [
            'https://i.postimg.cc/26vq8Jpr/Picsart-24-06-23-16-13-33-464.jpg'
        ]
    },
    'Principal office ': {
        floor: 0,
        direction: 'Right ',
        imag: [
            'https://i.postimg.cc/rwZnFbbW/Picsart-24-06-07-14-27-36-319.jpg'
        ]
    },
    'fees Counter ': {
        floor: 0,
        direction: 'Right ',
        imag: [
            'https://i.postimg.cc/wTV4n3Qw/Picsart-24-06-07-14-25-46-765.jpg'
        ]
    },
    'Director room ': {
        floor: 0,
        direction: 'Right ',
        imag: [
            'https://i.postimg.cc/YS4X4RKP/Picsart-24-06-07-14-28-33-060.jpg'
        ]
    },
    'Nf 23': {
        floor: 1,
        direction: 'Left And straight ',
        imag: [
            'https://i.postimg.cc/YSGkQZRW/Picsart-24-06-26-11-56-49-927.jpg',
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg'
        ]
    },
    Nf6: {
        floor: 1,
        direction: 'Left And straight ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/Y03wpHrJ/Picsart-24-06-26-12-00-33-187.jpg'
        ]
    },
    'Nf 19 ': {
        floor: 1,
        direction: 'Left And straight ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/0yrqqFLB/Picsart-24-06-26-11-59-14-996.jpg'
        ]
    },
    'Nf 20': {
        floor: 1,
        direction: 'Left And straight ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/G2n0G29W/Picsart-24-06-26-11-58-21-426.jpg'
        ]
    },
    'Nf 24': {
        floor: 1,
        direction: 'Left And straight ',
        imag: ['https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg']
    },
    'Nf 5(Cl15)': {
        floor: 1,
        direction: 'Left straight and left',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/zBFQhFsh/Picsart-24-06-26-17-43-13-979.jpg'
        ]
    },
    'Nf 4(Cl 16)': {
        floor: 1,
        direction: 'Left straight and left',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/hv4517n5/Picsart-24-06-26-17-44-49-685.jpg'
        ]
    },
    'Nf 29 (boys toilet)': {
        floor: 1,
        direction: 'Left straight and left',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/1RMT5Mch/Picsart-24-06-27-09-55-12-039.png'
        ]
    },
    'Nf 30': {
        floor: 1,
        direction: 'Left straight and left',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/bNJ5Gb3G/Picsart-24-06-27-09-55-53-699.png'
        ]
    },
    'Nf 3': {
        floor: 1,
        direction: 'Left straight and left',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/9FnnyMnL/Picsart-24-06-27-09-56-43-719.png'
        ]
    },
    'Nf 1': {
        floor: 1,
        direction: 'Left straight and left',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/y83rjKqs/Picsart-24-06-27-09-58-06-734.png'
        ]
    },
    'Nf 27': {
        floor: 1,
        direction: 'Left straight and left',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/R0rpbY9f/Picsart-24-06-27-10-04-27-902.png'
        ]
    },
    'Nf 2': {
        floor: 1,
        direction: 'Left straight and left',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/Bvx7WCQz/Picsart-24-06-27-09-57-32-757.png'
        ]
    },
    'Nf 6 (Hap)': {
        floor: 1,
        direction: 'Left straight and right ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/0QPW9Jzy/Picsart-24-06-27-10-13-27-394.jpg'
        ]
    },
    'Nf 8 (Library )': {
        floor: 1,
        direction: 'Left straight and right ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/V6g7vLtB/Picsart-24-06-27-10-15-08-503.jpg'
        ]
    },
    'Nf 21': {
        floor: 1,
        direction: 'Left straight and right ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/bY6Cjrpq/Picsart-24-06-27-10-22-23-428.jpg'
        ]
    },
    'Nf 18(Jyoti Soni)': {
        floor: 1,
        direction: 'Left straight and right ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/bNWms5ZM/Picsart-24-06-27-10-22-55-090.jpg'
        ]
    },
    'Nf 17': {
        floor: 1,
        direction: 'Left straight and right ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/zGh0WkWf/Picsart-24-06-27-10-23-21-653.jpg'
        ]
    },
    'Nf 16': {
        floor: 1,
        direction: 'Left straight and right ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/3wH9ZDCF/Picsart-24-06-27-10-24-16-899.jpg'
        ]
    },
    'Nf 15( Sapan sir somil sir room)': {
        floor: 1,
        direction: 'Left straight and right ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/rsz9pGMM/Picsart-24-06-27-10-24-25-636.jpg'
        ]
    },
    'Nf 10': {
        floor: 1,
        direction: 'Left straight and right ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/J0g5HyzJ/Picsart-24-06-27-10-16-20-060.jpg',
            'https://i.postimg.cc/SQtrvPfs/Picsart-24-06-27-10-29-45-684.jpg'
        ]
    },
    'Nf 11': {
        floor: 1,
        direction: 'Left straight and right ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/26t0h9HV/Picsart-24-06-27-10-30-08-325.jpg'
        ]
    },
    'Nf 9': {
        floor: 1,
        direction: 'Left straight and right ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/3rsTHtK8/Picsart-24-06-27-10-15-50-453.jpg'
        ]
    },
    'Nf 31(B toilet)': {
        floor: 1,
        direction: 'Left straight and right ',
        imag: [
            'https://i.postimg.cc/t4R4nB83/Screenshot-2024-0627-175550.jpg',
            'https://i.postimg.cc/6pwx8T2F/Picsart-24-06-27-10-30-52-316.jpg'
        ]
    },
    '222( B toilet)': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/4NgS5qf9/Picsart-24-06-27-10-33-36-194.jpg'
        ]
    },
    'Ns 26': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/jSqkVfJq/Picsart-24-06-27-13-12-14-038.jpg'
        ]
    },
    'Ns 27': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/q7zbqdL9/Picsart-24-06-27-13-14-03-115.jpg'
        ]
    },
    'Ns 25': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/VvcDK088/Picsart-24-06-27-13-18-20-512.jpg'
        ]
    },
    'Ns 24': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/28r0vWGd/Screenshot-2024-0627-131656.jpg'
        ]
    },
    'Ns 28': {
        floor: 2,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/kXsfy5Y0/Picsart-24-06-27-13-43-41-793.jpg'
        ]
    },
    'Ns 2': {
        floor: 2,
        direction: 'left up and straight left ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/SxKV1pwJ/Picsart-24-06-27-13-44-53-023.jpg',
            'https://i.postimg.cc/yNgjBy6K/Picsart-24-06-27-13-50-47-931.jpg'
        ]
    },
    'Cl 11': {
        floor: 2,
        direction: 'left up and straight left ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/9f6pfwz7/Picsart-24-06-27-13-46-05-099.jpg'
        ]
    },
    Cl12: {
        floor: 2,
        direction: 'left up and straight left ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/508mQ9Fk/Picsart-24-06-27-13-47-27-134.jpg'
        ]
    },
    'Ns 32': {
        floor: 2,
        direction: 'left up and straight left ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/wMHQXKXx/Picsart-24-06-27-13-49-50-525.jpg'
        ]
    },
    'Ns 3': {
        floor: 2,
        direction: 'left up and straight left ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/NjV8N26z/Picsart-24-06-27-13-50-20-427.jpg'
        ]
    },
    'Ns 1': {
        floor: 2,
        direction: 'left up and straight left ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/ydCmKqrh/Picsart-24-06-27-13-51-08-390.jpg'
        ]
    },
    MIA: {
        floor: 2,
        direction: 'left up and straight Right ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/pr2K9fvp/Picsart-24-06-27-13-54-55-509.jpg'
        ]
    },
    'Ns 13': {
        floor: 2,
        direction: 'left up and straight Right ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/4NxzsQw0/Picsart-24-06-27-13-56-31-333.jpg'
        ]
    },
    'Ns 12': {
        floor: 2,
        direction: 'left up and straight Right ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/m2p7D15g/Picsart-24-06-27-13-56-14-558.jpg'
        ]
    },
    'Ns 14': {
        floor: 2,
        direction: 'left up and straight Right ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/L8qLZ4cB/Picsart-24-06-27-13-58-41-880.jpg'
        ]
    },
    '36(Python lab)': {
        floor: 0,
        direction: 'Right ',
        imag: [
            'https://i.postimg.cc/RZjf159r/Picsart-24-06-27-14-20-56-601.jpg',
            'https://i.postimg.cc/VLhb1QJS/Picsart-24-06-27-14-12-48-588.jpg'
        ]
    },
    '34 (Food court)': {
        floor: 0,
        direction: 'Right ',
        imag: [
            'https://i.postimg.cc/Y2bWnmkz/Picsart-24-06-27-14-21-03-122.jpg',
            'https://i.postimg.cc/s2YBpMwS/Picsart-24-06-27-14-14-20-943.jpg'
        ]
    },
    '33 ( Pantry)': {
        floor: 0,
        direction: 'Right ',
        imag: [
            'https://i.postimg.cc/FszJ2sH5/Picsart-24-06-27-14-21-07-918.jpg',
            'https://i.postimg.cc/gJ4nTf92/Picsart-24-06-27-14-15-05-415.jpg'
        ]
    },
    'Machine room ': {
        floor: 3,
        direction: 'left up and straight ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/MHxgvFXV/Picsart-24-06-27-14-31-07-608.jpg'
        ]
    },
    'Pharma chemistry lab 2': {
        floor: 3,
        direction: 'left up and straight left',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/TYtB3Qx5/Picsart-24-06-27-14-32-40-042.jpg'
        ]
    },
    'Pharmaceutics 2': {
        floor: 3,
        direction: 'left up and straight left',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/fywgwSgv/Picsart-24-06-27-14-32-44-689.jpg'
        ]
    },
    'Pharmacognosy ': {
        floor: 3,
        direction: 'left up and straight Right ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/DZzCW4Tf/Picsart-24-06-27-14-37-11-938.jpg'
        ]
    },
    'Pharma chemistry lab 3': {
        floor: 3,
        direction: 'left up and straight left',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/V6wKRb1c/Picsart-24-06-27-14-36-38-126.jpg'
        ]
    },
    'Pharmaceutics 3': {
        floor: 3,
        direction: 'left up and straight left',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/GpCVppt9/Picsart-24-06-27-14-36-42-636.jpg'
        ]
    },
    'Pharmacology ': {
        floor: 3,
        direction: 'left up and straight Right ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/15VjcFNf/Picsart-24-06-27-14-36-47-318.jpg'
        ]
    },
    'Pharma chemistry lab 1': {
        floor: 3,
        direction: 'left up and straight Right ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/sgF0n2pK/Picsart-24-06-27-14-37-01-576.jpg'
        ]
    },
    'Pharmaceutics 1': {
        floor: 3,
        direction: 'left up and straight Right ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/g2vt1Psp/Picsart-24-06-27-14-37-06-420.jpg'
        ]
    },
    'Hap 1': {
        floor: 3,
        direction: 'left up and straight Right ',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg'
        ]
    },
    'Laboratory ': {
        floor: 3,
        direction: 'left up and straight left',
        imag: [
            'https://i.postimg.cc/bdXQg7cF/Picsart-24-06-27-16-36-10-031.jpg',
            'https://i.postimg.cc/nrj028r6/Picsart-24-06-27-14-36-57-302.jpg'
        ]
    },
    'cl 14': {
        floor: 2,
        direction: 'Left up and straight ',
        imag: [
            'https://i.postimg.cc/QC76jkjw/Picsart-24-06-27-16-35-40-193.jpg',
            'https://i.postimg.cc/rmbvMNr2/Picsart-24-06-27-13-20-30-627.jpg'
        ]
    }

}

//............................................
let spandan = {

    '1': { floor: 0, direction: 'Straight right and left ' },
    '11': { floor: 0, direction: 'Straight and 2nd left' },
    '12': { floor: 0, direction: 'Straight and 2nd Left ' },
    '14': { floor: 0, direction: 'Straight and right ' },
    '15': { floor: 0, direction: 'Straight and right ' },
    '16': { floor: 0, direction: 'Straight and right ' },
    '17': { floor: 0, direction: 'Straight and Right' },
    '32': { floor: 0, direction: 'Straight ' },
    '35': { floor: 0, direction: 'Straight ' },
    '101': { floor: 1, direction: 'Upward and Straight ' },
    '102': { floor: 1, direction: 'Straight and upward ' },
    '103': { floor: 1, direction: 'Straight and upward at corner ' },
    '105': {
        floor: 1,
        direction: 'straight upward and right above main Entrance '
    },
    '106': {
        floor: 1,
        direction: 'Straight upward and Right above main Entrance '
    },
    '107': { floor: 1, direction: 'Straight upward right and right ' },
    '108': { floor: 1, direction: 'Straight upward right and right ' },
    '109': { floor: 1, direction: 'Straight Left and upward right' },
    '110': {
        floor: 1,
        direction: 'straight right and upward above parking Entrance '
    },
    '111': {
        floor: 1,
        direction: 'Straight right and upward above parking Entrance '
    },
    '113': {
        floor: 1,
        direction: 'straight right and upward above parking Entrance '
    },
    '117': { floor: 1, direction: 'Straight right and upward ' },
    '118': { floor: 1, direction: 'Straight right and upward ' },
    '201': { floor: 2, direction: 'upward and Left ' },
    '202': { floor: 2, direction: 'upward and Left ' },
    '203': { floor: 2, direction: 'upward and Left ' },
    '204': { floor: 2, direction: 'Straight upward and Right ' },
    '205': { floor: 2, direction: 'Straight upward right and right ' },
    '206': { floor: 2, direction: 'Straight upward right and right ' },
    '207': {
        floor: 2,
        direction: 'straight right and upward above parking Entrance '
    },
    '208': {
        floor: 2,
        direction: 'straight right and upward above parking Entrance '
    },
    '209': {
        floor: 2,
        direction: 'straight right and upward above parking Entrance '
    },
    '210': { floor: 2, direction: 'upward and Left ' },
    '211': { floor: 2, direction: 'upward and Left ' },
    '212': { floor: 2, direction: 'upward and Left ' },
    '213': {
        floor: 2,
        direction: 'straight right and upward above parking Entrance '
    },
    '214': {
        floor: 2,
        direction: 'straight right and upward above parking Entrance '
    },
    '215': {
        floor: 2,
        direction: 'straight right and upward above parking Entrance '
    },
    '216': { floor: 2, direction: 'Straight up' },
    '217': { floor: 2, direction: 'Straight up' },
    '218': { floor: 2, direction: 'Straight up' },
    '219': { floor: 2, direction: 'Straight up' },
    '220': { floor: 2, direction: 'Straight up' },
    '221': { floor: 2, direction: 'Straight up' },
    '223': { floor: 2, direction: 'upward and straight above spandana ' },
    '224': { floor: 2, direction: 'upward and straight above spandana ' },
    '225': { floor: 2, direction: 'upward and straight above spandana ' },
    '226': { floor: 2, direction: 'upward and straight above spandana ' },
    '232': { floor: 2, direction: 'upward and Left ' },
    '233': { floor: 2, direction: 'upward and Left ' },
    '234': { floor: 2, direction: 'upward and Left ' },
    '241': { floor: 2, direction: 'upward and Left at corner ' },
    '242': { floor: 2, direction: 'upward and Left at corner ' },
    '243': { floor: 2, direction: 'upward and Left at corner ' },
    '244': { floor: 2, direction: 'upward and Left at corner ' },
    '245': { floor: 2, direction: 'upward and Left above maine Entrance ' },
    '311': { floor: 3, direction: 'Straight and up' },
    '312': { floor: 3, direction: 'Straight and up' },
    '313': { floor: 3, direction: 'Straight and up' },
    '315': { floor: 3, direction: 'Straight and up' },
    '316': { floor: 3, direction: 'Straight and up' },
    '317': { floor: 3, direction: 'Straight and up' },
    '318': { floor: 3, direction: 'upward and straight ' },
    '319': { floor: 3, direction: 'upward and straight ' },
    '320': { floor: 3, direction: 'upward and straight ' },
    '321': { floor: 3, direction: 'upward and straight ' },
    '322': { floor: 3, direction: 'upward and Right corner ' },
    '323': { floor: 3, direction: 'upward and Right corner ' },
    '324': { floor: 3, direction: 'upward and Right corner ' },
    '325': { floor: 3, direction: 'upward and Right corner ' },
    '326': { floor: 3, direction: 'upward and left ' },
    '327': { floor: 3, direction: 'upward and left ' },
    'Exam sell': { floor: 0, direction: 'straight Right and left ' },
    'Principal office ': { floor: 0, direction: 'Straight and left' },
    'fees Counter ': { floor: 0, direction: 'Straight and left ' },
    'principal office ': { floor: 0, direction: 'straight and left' },
    'Nf 23': { floor: 1, direction: 'Straight and Right' },
    Nf6: { floor: 1, direction: 'Straight and Right' },
    'Nf 19 ': { floor: 1, direction: 'Straight and Right' },
    'Nf 20': { floor: 1, direction: 'Straight and Right' },
    'Nf 24': { floor: 1, direction: 'Straight and Right' },
    'Nf 5(Cl15)': { floor: 1, direction: 'Straight and Right' },
    'Nf 4(Cl 16)': { floor: 1, direction: 'Straight and Right' },
    'Nf 29 (boys toilet)': { floor: 1, direction: 'Straight Right and left ' },
    'Nf 30': { floor: 1, direction: 'Straight Right and left ' },
    'Nf 3': { floor: 1, direction: 'Straight Right and left ' },
    'Nf 1': { floor: 1, direction: 'Straight Right and left ' },
    'Nf 27': { floor: 1, direction: 'Straight Right and left ' },
    'Nf 2': { floor: 1, direction: 'Straight Right and left ' },
    'Nf 6 (Hap)': { floor: 1, direction: 'Straight right and Right ' },
    'Nf 8 (Library )': { floor: 1, direction: 'Straight right and Right ' },
    'Nf 21': { floor: 1, direction: 'Straight right and Right ' },
    'Nf 18(Jyoti Soni)': { floor: 1, direction: 'Straight right and Right ' },
    'Nf 17': { floor: 1, direction: 'Straight right and Right ' },
    'Nf 16': { floor: 1, direction: 'Straight right and Right ' },
    'Nf 15( Sapan sir somil sir room)': { floor: 1, direction: 'Straight right and Right ' },
    'Nf 10': { floor: 1, direction: 'Straight right and Right ' },
    'Nf 11': { floor: 1, direction: 'Straight right and Right ' },
    'Nf 9': { floor: 1, direction: 'Straight right and Right ' },
    'Nf 31(B toilet)': { floor: 1, direction: 'Straight right and Right ' },
    '222( B toilet)': { floor: 2, direction: 'Straight up' },
    'Ns 26': { floor: 2, direction: 'Straight up Right ' },
    'Ns 27': { floor: 2, direction: 'Straight up Right ' },
    'Ns 25': { floor: 2, direction: 'Straight up Right ' },
    'Ns 24': { floor: 2, direction: 'Straight up Right ' },
    'Ns 28': { floor: 2, direction: 'straight Up Right and left ' },
    'Ns 2': { floor: 2, direction: 'straight Up Right and left ' },
    'Cl 11': { floor: 2, direction: 'straight Up Right and left ' },
    Cl12: { floor: 2, direction: 'straight Up Right and left ' },
    'Ns 32': { floor: 2, direction: 'straight Up Right and left ' },
    'Ns 3': { floor: 2, direction: 'straight Up Right and left ' },
    'Ns 1': { floor: 2, direction: 'straight Up Right and left ' },
    MIA: { floor: 2, direction: 'straight Up Right and left ' },
    'Ns 13': { floor: 2, direction: 'straight Up Right and left ' },
    'Ns 12': { floor: 2, direction: 'straight Up Right and left ' },
    'Ns 14': { floor: 2, direction: 'straight Up Right and left ' },
    '36(Python lab)': { floor: 0, direction: 'Straight ' },
    '34 (Food court)': { floor: 0, direction: 'Straight ' },
    '33 ( Pantry)': { floor: 0, direction: 'Straight ' },
    'Machine room ': { floor: 3, direction: 'Straight up and Right ' },
    'Pharma chemistry lab 2': { floor: 3, direction: 'Straight up and Right and left ' },
    'Pharmaceutics 2': { floor: 3, direction: 'Straight up and Right and left ' },
    'Pharmacognosy ': { floor: 3, direction: 'Straight up and Right and Right ' },
    'Pharma chemistry lab 1': { floor: 3, direction: 'Straight up and Right and Right ' },
    'Pharmaceutics 3': { floor: 3, direction: 'Straight up and Right and left ' },
    'Pharmacology ': { floor: 3, direction: 'Straight up and Right and Right ' },
    'Pharmaceutics 1': { floor: 3, direction: 'Straight up and Right and Right ' },
    'Hap 1': { floor: 3, direction: 'Straight up and Right and Right ' },
    Laboratory: { floor: 3, direction: 'Straight up and Right and left ' },
    'Cl 14 ': { floor: 2, direction: 'Straight up and right ' }

}

//......................................................
let parking = {

   '1': { floor: 0, direction: 'Straight And Right ' },
  '11': { floor: 0, direction: 'Right ' },
  '12': { floor: 0, direction: 'Right ' },
  '14': { floor: 0, direction: 'Left' },
  '15': { floor: 0, direction: 'Left' },
  '16': { floor: 0, direction: 'Left' },
  '17': { floor: 0, direction: 'left' },
  '32': { floor: 0, direction: 'Straight and Left' },
  '35': { floor: 0, direction: 'Straight and Left' },
  '101': { floor: 1, direction: 'Straight and Left upward ' },
  '102': { floor: 1, direction: 'straight and upward ' },
  '103': { floor: 1, direction: 'Straight And upward ' },
  '105': { floor: 1, direction: 'Right and Upward ' },
  '106': { floor: 1, direction: 'Right and Upward ' },
  '107': { floor: 1, direction: 'Right and Upward ' },
  '108': { floor: 1, direction: 'Right and Upward ' },
  '109': { floor: 1, direction: 'Upward Right ' },
  '110': { floor: 1, direction: 'Left stairs And upward' },
  '111': { floor: 1, direction: 'Left stairs And upward' },
  '113': { floor: 1, direction: 'Left stairs And upward' },
  '117': { floor: 1, direction: 'Left stairs And upward' },
  '118': { floor: 1, direction: 'Left stairs And upward' },
  '201': { floor: 2, direction: 'Straight upward and right ' },
  '202': { floor: 2, direction: 'Straight Upward and right ' },
  '203': { floor: 2, direction: 'Straight upward and right ' },
  '204': { floor: 2, direction: 'Right and Upward ' },
  '205': { floor: 2, direction: 'Right and Upward ' },
  '206': { floor: 2, direction: 'Right and Upward ' },
  '207': { floor: 2, direction: 'Upward above Entrance ' },
  '208': { floor: 2, direction: 'Upward above Entrance ' },
  '209': { floor: 2, direction: 'Upward above Entrance ' },
  '210': { floor: 2, direction: 'Straight and  upward ' },
  '211': { floor: 2, direction: 'Straight and  upward ' },
  '212': { floor: 2, direction: 'Straight and  upward ' },
  '213': { floor: 2, direction: 'Upward above Entrance ' },
  '214': { floor: 2, direction: 'Upward above Entrance ' },
  '215': { floor: 2, direction: 'Upward above Entrance ' },
  '216': { floor: 2, direction: 'Left straight and up' },
  '217': { floor: 2, direction: 'Left straight and up' },
  '218': { floor: 2, direction: 'Left straight and up' },
  '219': { floor: 2, direction: 'Left straight and up' },
  '220': { floor: 2, direction: 'Left straight and up' },
  '221': { floor: 2, direction: 'Left straight and up' },
  '223': { floor: 2, direction: 'Left straight and upward ' },
  '224': { floor: 2, direction: 'Left straight and upward ' },
  '225': { floor: 2, direction: 'Left straight and upward ' },
  '226': { floor: 2, direction: 'Left straight and upward ' },
  '232': { floor: 2, direction: 'Straight and  upward ' },
  '233': { floor: 2, direction: 'Straight and  upward ' },
  '234': { floor: 2, direction: 'Straight and  upward ' },
  '241': { floor: 2, direction: 'Straight Upward and right at corner ' },
  '242': { floor: 2, direction: 'Straight Upward and right at corner ' },
  '243': { floor: 2, direction: 'Straight Upward and right at corner ' },
  '244': { floor: 2, direction: 'Straight Upward and right at corner ' },
  '245': { floor: 2, direction: 'Right Upward above main entrance ' },
  '311': { floor: 3, direction: 'Up and Right ' },
  '312': { floor: 3, direction: 'Up and Right ' },
  '313': { floor: 3, direction: 'Up and Right ' },
  '315': { floor: 3, direction: 'Up and Right ' },
  '316': { floor: 3, direction: 'Up and Right ' },
  '317': { floor: 3, direction: 'Up and Right ' },
  '318': { floor: 3, direction: 'Left and Upward ' },
  '319': { floor: 3, direction: 'Left and Upward ' },
  '320': { floor: 3, direction: 'Left and Upward ' },
  '321': { floor: 3, direction: 'Left and Upward ' },
  '322': { floor: 3, direction: 'Left upward and Right at corner ' },
  '323': { floor: 3, direction: 'Left upward and Right at corner ' },
  '324': { floor: 3, direction: 'Left upward and Right at corner ' },
  '325': { floor: 3, direction: 'Left Upward and right ' },
  '326': { floor: 3, direction: 'Left Upward and right ' },
  '327': { floor: 3, direction: 'Left Upward and right ' },
  'Exam sell': { floor: 0, direction: 'straight And Right' },
  'Principal office ': { floor: 0, direction: 'Right ' },
  'fees Counter ': { floor: 0, direction: 'Right ' },
  'Director room ': { floor: 0, direction: 'Right ' },
  'Nf 23': { floor: 1, direction: 'Left Straight ' },
  Nf6: { floor: 1, direction: 'Left Straight ' },
  'Nf 19 ': { floor: 1, direction: 'Left Straight ' },
  'Nf 20': { floor: 1, direction: 'Left Straight ' },
  'Nf 24': { floor: 1, direction: 'Left straight and Left' },
  'Nf 5(Cl15)': { floor: 1, direction: 'Left straight and Left' },
  'Nf 4(Cl 16)': { floor: 1, direction: 'Left straight and Left' },
  'Nf 29 (boys toilet)': { floor: 1, direction: 'Left straight and Left' },
  'Nf 30': { floor: 1, direction: 'Left straight and Left' },
  'Nf 3': { floor: 1, direction: 'Left straight and Left' },
  'Nf 1': { floor: 1, direction: 'Left straight and Left' },
  'Nf 27': { floor: 1, direction: 'Left straight and Left' },
  'Nf 2': { floor: 1, direction: 'Left straight and Left' },
  'Nf 6 (Hap)': { floor: 1, direction: 'Left straight and Right ' },
  'Nf 8 (Library )': { floor: 1, direction: 'Left straight and Right ' },
  'Nf 21': { floor: 1, direction: 'Left straight and Right ' },
  'Nf 18(Jyoti Soni)': { floor: 1, direction: 'Left straight and Right ' },
  'Nf 17': { floor: 1, direction: 'Left straight and Right ' },
  'Nf 16': { floor: 1, direction: 'Left straight and Right ' },
  'Nf 15( Sapan sir somil sir room)': { floor: 1, direction: 'Left straight and Right ' },
  'Nf 10': { floor: 1, direction: 'Left straight and Right ' },
  'Nf 11': { floor: 1, direction: 'Left straight and Right ' },
  'Nf 9': { floor: 1, direction: 'Left straight and Right ' },
  'Nf 31(B toilet)': { floor: 1, direction: 'Left straight and Right ' },
  '222( B toilet)': { floor: 2, direction: 'Left straight and up' },
  'Ns 26': { floor: 2, direction: 'Up and Right Straight ' },
  'Ns 27': { floor: 2, direction: 'Up and Right Straight ' },
  'Ns 25': { floor: 2, direction: 'Up and Right Straight ' },
  'Ns 24': { floor: 2, direction: 'Up and Right Straight ' },
  'Ns 28': { floor: 2, direction: 'Up Right Straight and Left' },
  'Ns 2': { floor: 2, direction: 'Up Right Straight and Left' },
  'Cl 11': { floor: 2, direction: 'Up Right Straight and Left' },
  Cl12: { floor: 2, direction: 'Up Right Straight and Left' },
  'Ns 32': { floor: 2, direction: 'Up Right Straight and Left' },
  'Ns 3': { floor: 2, direction: 'Up Right Straight and Left' },
  'Ns 1': { floor: 2, direction: 'Up Right Straight and Left' },
  MIA: { floor: 2, direction: 'Up Right Straight and Right ' },
  'Ns 13': { floor: 2, direction: 'Up Right Straight and Right ' },
  'Ns 12': { floor: 2, direction: 'Up Right Straight and Right ' },
  'Ns 14': { floor: 2, direction: 'Up Right Straight and Right ' },
  '36(Python lab)': { floor: 0, direction: 'Straight and Left' },
  '34 (Food court)': { floor: 0, direction: 'Straight and Left' },
  '33 ( Pantry)': { floor: 0, direction: 'Straight and Left' },
  'Machine room ': { floor: 3, direction: 'Up and Right ' },
  'Pharma chemistry lab 2': { floor: 3, direction: 'Up Right Straight and Left' },
  'Pharmaceutics 2': { floor: 3, direction: 'Up Right Straight and Left' },
  'Pharmacognosy ': { floor: 3, direction: 'Up Right Straight and Right ' },
  'Pharma chemistry lab 1': { floor: 3, direction: 'Up Right Straight and Right ' },
  'Pharmaceutics 3': { floor: 3, direction: 'Up Right Straight and Left' },
  'Pharmacology ': { floor: 3, direction: 'Up Right Straight and Right ' },
  'Pharmaceutics 1': { floor: 3, direction: 'Up Right Straight and Right ' },
  'Hap 1': { floor: 3, direction: 'Up Right Straight and Right ' },
  'Laboratory ': { floor: 3, direction: 'Up Right Straight and Left' },
  'Cl 14': { floor: 2, direction: 'Left up and straight ' }

}

//TODO ..........................OPTION FOR ROOMS IN SELECT TAG ........................................
let selectElement = document.getElementById("room");
for (const key in entrance) {
    let option = document.createElement('option');
    option.value = key;
    option.text = key;
    selectElement.appendChild(option);

}



//todo: ............ Show MBA entrance radio btn based on room searched..................


//! FUNCTION TO DISPLAY AND ENLARGE IMAGE

function enlargeImage() {
    let img = document.getElementsByClassName("pic")
    img.style.width = "500px";  // specify the width of the enlarged image
    img.style.height = "auto";
}


function displayImg(input) {
    let room = entrance[input];
    let imagfile = room.imag;
    imagfile.forEach(img => {
        let RoomImg = img;
        // document.getElementById("photo").innerHTML ='<center>'+'<img id="image" src="' + imagfile + '" width="200px" onclick="enlargeImage()">'+'</center>';
        let imgElement = document.createElement('img');
        imgElement.src = img;
        imgElement.width = 200;
        imgElement.alt = input;
        imgElement.classList.add("pic");
        // imgElement.classList.add("enlarge");
        // imgElement.id= 'pic';
        document.getElementById("photo").appendChild(imgElement);
        imgElement.onclick = () => {

            // window.open(RoomImg, '_blank')

            var img = imgElement;
            // window.location.href= img;
            if (img.classList.contains('enlarge')) {
                img.classList.remove('enlarge');
              } else {
                img.classList.add('enlarge');
              }
        }
        imgElement.ondblclick = () =>{
            window.open(RoomImg, '_blank')
        }

        
    })

}

//TODO ..................................................................

//!FUNCTION TO MANAGE SEARCH RESULT BASED ON RADIO BUTTON 

function togglesearch() {

    var radios = document.getElementsByName("reference");
    // window.console.log(radios[0]);

    if (radios[0].checked) {
        NavigateRoom(entrance);
    }

    else if (radios[1].checked) {
        NavigateRoom(spandan);
    }
    else {
        NavigateRoom(parking);
    }



}

//TODO ..................................................................

//! FUNCTION TO SHOW RESULT WHEN SEARCH BTN IS PRESSED
function NavigateRoom(ref) {
    reset_result();
    var roomNum = document.getElementById("room").value;
    document.getElementById("result").classList.remove("result_hide");
    if (roomNum in ref) {
        document.getElementById("display").innerHTML = "<center> <b>You entered:</b> " + roomNum + "\<br><b>Department:</b> " + entrance[roomNum].dept + "<br><b>Floor:</b> " + ref[roomNum].floor + "<br><b>Direction:</b> " + ref[roomNum].direction + "</center>" + "<br>" + " <div class='note'></center>Single Click &nbsp;→ Enlarge <br>Double Click &nbsp;→ Fullscreen<br></center> </div>";
        displayImg(roomNum);
        
    }

    else {
        document.getElementById("display").innerHTML = "<center>Room does not exist ! TRY AGAIN</center> ";
    }
}

//! FUNCTION TO SHOW RESULT ON KEYPRESS
document.getElementById("room").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        togglesearch();
    }
})


//! function to reset result container to show new result every time search button is clicked
function reset_result() {
    document.getElementById("result").innerHTML = '<p id="display" class="content" >' +
        '<p id="photo" class="images">' +
        '</p>' +
        '</P>';
}
