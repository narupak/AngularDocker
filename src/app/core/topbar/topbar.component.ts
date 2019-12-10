import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private router : Router) { }
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
          label: 'เกี่ยวกับ', icon: 'fa fa-fw fa-check',
          items: [
              [
                  {
                      label: 'TV 1',
                      items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
                  },
                  {
                      label: 'TV 2',
                      items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                  }
              ],
              [
                  {
                      label: 'TV 3',
                      items: [{label: 'TV 3.1'},{label: 'TV 3.2'}]
                  },
                  {
                      label: 'TV 4',
                      items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
                  }    
              ]
          ]
      },
      {
          label: 'วิสัยทัศน์', icon: 'fa fa-fw fa-soccer-ball-o',
          items: [
              [
                  {
                      label: 'Sports 1',
                      items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                  },
                  {
                      label: 'Sports 2',
                      items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                  },

              ],
              [
                  {
                      label: 'Sports 3',
                      items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                  },
                  {
                      label: 'Sports 4',
                      items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                  }
              ],
              [
                  {
                      label: 'Sports 5',
                      items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                  },
                  {
                      label: 'Sports 6',
                      items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                  }
              ]
          ]
      },
      {
        label: 'หน้าที่', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
            [
                {
                    label: 'Sports 1',
                    items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                },
                {
                    label: 'Sports 2',
                    items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                },

            ],
            [
                {
                    label: 'Sports 3',
                    items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                },
                {
                    label: 'Sports 4',
                    items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                }
            ],
            [
                {
                    label: 'Sports 5',
                    items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                },
                {
                    label: 'Sports 6',
                    items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                }
            ]
        ]
    },
    {
      label: 'บุคลากร', icon: 'fa fa-fw fa-soccer-ball-o',
      items: [
          [
              {
                  label: 'Sports 1',
                  items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
              },
              {
                  label: 'Sports 2',
                  items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
              },

          ],
          [
              {
                  label: 'Sports 3',
                  items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
              },
              {
                  label: 'Sports 4',
                  items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
              }
          ],
          [
              {
                  label: 'Sports 5',
                  items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
              },
              {
                  label: 'Sports 6',
                  items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
              }
          ]
      ]
  },
  {
    label: 'ติดต่อ', icon: 'fa fa-fw fa-soccer-ball-o',
    items: [
        [
            {
                label: 'Sports 1',
                items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
            },
            {
                label: 'Sports 2',
                items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
            },

        ],
        [
            {
                label: 'Sports 3',
                items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
            },
            {
                label: 'Sports 4',
                items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
            }
        ],
        [
            {
                label: 'Sports 5',
                items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
            },
            {
                label: 'Sports 6',
                items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
            }
        ]
    ]
},
{
  label: 'แผนที่อำเภอ', icon: 'fa fa-fw fa-soccer-ball-o',
  items: [
      [
          {
              label: 'Sports 1',
              items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
          },
          {
              label: 'Sports 2',
              items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
          },

      ],
      [
          {
              label: 'Sports 3',
              items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
          },
          {
              label: 'Sports 4',
              items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
          }
      ],
      [
          {
              label: 'Sports 5',
              items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
          },
          {
              label: 'Sports 6',
              items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
          }
      ]
  ]
}
  ];
  }

  clickRouter(){
    this.router.navigate(['pageform','login']);
  }

}
