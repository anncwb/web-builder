import { FormlyFieldConfig } from '@ngx-formly/core';
import { getAspectRatio, getObjectFix } from './getCommon';

export function getInlineImg(ele: any): FormlyFieldConfig[] {
  return [
    {
      key: 'style',
      fieldGroup: [
        {
          fieldGroupClassName: 'section-group',
          fieldGroup: [
            {
              type: 'input',
              key: 'width',
              defaultValue: ele.style.width ?? 'auto',
              className: 'w-2/5',
              templateOptions: {
                label: 'W',
              },
            },
            {
              type: 'input',
              key: 'height',
              className: 'w-2/5',
              defaultValue: ele.style.height ?? 'auto',
              templateOptions: {
                label: 'H',
              },
            },
            {
              type: 'input',
              key: 'opacity',
              className: 'w-2/5',
              defaultValue: ele.style.opacity ?? 1,
              templateOptions: {
                label: 'Opacity',
                type: 'number',
                step: 0.1,
              },
            },
            {
              type: 'input',
              key: 'borderRadius',
              className: 'w-2/5',
              defaultValue: ele.style.borderRadius ?? 0,
              templateOptions: {
                label: '圆角',
              },
            },
          ],
        },
        {
          type: 'select',
          key: 'boxShadow',
          className: 'w-full',
          defaultValue: ele.style.boxShadow ?? 'none',
          templateOptions: {
            label: '阴影',
            options: [
              {
                label: '无',
                value: 'none',
              },
              {
                label: '小',
                value: 'rgba(0, 0, 0, 0.1) 0 2px 4px',
              },
              {
                label: '中',
                value: 'rgba(0, 0, 0, 0.1) 0 4px 8px',
              },
              {
                label: '大',
                value: 'rgba(0, 0, 0, 0.1) 0 6px 12px',
              },
            ],
          },
        },
        {
          type: 'select',
          key: 'aspectRatio',
          className: 'w-full',
          defaultValue: ele.style.aspectRatio ?? 'auto',
          templateOptions: {
            label: '宽高比',
            options: getAspectRatio,
          },
        },
        {
          type: 'select',
          key: 'objectFit',
          className: 'w-full',
          defaultValue: ele.style.objectFit ?? 'initial',
          templateOptions: {
            label: '填充方式',
            options: getObjectFix,
          },
        },
      ],
    },
    {
      type: 'img-picker',
      key: 'src',
      defaultValue: ele.src,
      templateOptions: {
        updateLabel: '更新图片',
        addLabel: '设置图片',
        deleteLabel: '删除',
        fileName: ele.getAttribute('src').split('/').pop(),
        alt: ele.getAttribute('alt'),
      },
    },
  ];
}
