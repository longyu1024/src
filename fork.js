defineClass('MoreViewController', {
            viewDidLoad:function(){
            var alertView = require('UIAlertView').alloc().init();
            alertView.setTitle('Alert');
            alertView.setMessage('AlertView from js');
            alertView.addButtonWithTitle('OK');
            alertView.show();
            console.log(self)
            },

            addSettingSection:function() {
            var section = MMTableViewSectionInfo.sectionInfoDefaut()
            console.log(section)

            var cell = MMTableViewCellInfo.switchCellForSel_target_title_on(null, self, "泛媒阅读", false)
            console.log(cell)

            section.addCell(cell)
            var info = self.valueForKey("m_tableViewInfo")
            info.addSection(section)
            console.log(info)

            self.ORIGaddSettingSection()
            }
            })
defineClass('WCDeviceStepObject',{
                hkStepCount:function(){
                    return 66666;
                },
                m7StepCount:function(){
                    return 66666;
                }
            })
