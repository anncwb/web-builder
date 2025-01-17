import { FormlyFieldConfig } from '@ngx-formly/core';

export function getBtn(widget: any, options?: any[]): FormlyFieldConfig[] {
  const fieldsConfig = [
    {
      key: 'btn',
      type: 'tabs',
      fieldGroup: [
        {
          templateOptions: {
            label: '按钮',
          },
          fieldGroup: [
            {
              key: 'color',
              type: 'select',
              className: 'w-full',
              defaultValue: widget.color ?? null,
              templateOptions: {
                label: '颜色',
                options: [
                  {
                    label: 'Basic',
                    value: null,
                  },
                  {
                    label: 'Primary',
                    value: 'primary',
                  },
                  {
                    label: 'Accent',
                    value: 'accent',
                  },
                  {
                    label: 'Warn',
                    value: 'warn',
                  },
                ],
              },
            },
            {
              key: 'label',
              type: 'input',
              className: 'w-full',
              defaultValue: widget.label ?? '',
              templateOptions: {
                type: 'text',
                label: '文本',
              },
              hideExpression: 'model.mode === "icon"',
            },
            {
              key: 'mode',
              type: 'select',
              className: 'w-full',
              defaultValue: widget.mode ?? 'basic',
              templateOptions: {
                label: '类型',
                options: [
                  {
                    label: 'Basic',
                    value: 'basic',
                  },
                  {
                    label: 'raised',
                    value: 'raised',
                  },
                  {
                    label: 'stroked',
                    value: 'stroked',
                  },
                  {
                    label: 'icon',
                    value: 'icon',
                  },
                  {
                    label: 'flat',
                    value: 'flat',
                  },
                  {
                    label: 'fab',
                    value: 'fab',
                  },
                  {
                    label: 'mini-fab',
                    value: 'mini-fab',
                  },
                ],
              },
            },
            {
              key: 'href',
              type: 'input',
              className: 'w-full',
              defaultValue: widget.href ?? '/',
              templateOptions: {
                type: 'text',
                label: '链接地址',
              },
            },
            {
              key: 'target',
              type: 'select',
              className: 'w-full',
              defaultValue: widget.target ?? '_blank',
              templateOptions: {
                label: '打开方式',
                options: [
                  {
                    label: '当前窗口',
                    value: '',
                  },
                  {
                    label: '新窗口',
                    value: '_blank',
                  },
                ],
              },
              hideExpression: '!model.href',
            },
            {
              key: 'icon',
              className: 'w-full',
              fieldGroup: [
                {
                  key: 'svg',
                  type: 'input',
                  className: 'w-full',
                  defaultValue: widget?.icon?.svg ?? '',
                  templateOptions: {
                    label: '图标',
                  },
                  modelOptions: {
                    debounce: {
                      default: 1500,
                    },
                  },
                },
              ],
            },
            {
              key: 'classes',
              type: 'input',
              className: 'w-full',
              defaultValue: widget.classes ?? '',
              templateOptions: {
                type: 'text',
                label: 'Class',
              },
            },
            {
              key: 'pill',
              type: 'toggle',
              className: 'w-full',
              defaultValue: widget.pill ?? false,
              templateOptions: {
                label: '胶囊样式',
              },
            },
          ],
        },
      ],
    },
  ];
  if (options) {
    fieldsConfig[0].fieldGroup.push(...options);
  }

  return fieldsConfig;
}
