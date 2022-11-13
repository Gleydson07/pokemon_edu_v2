import { ComponentProps, ReactNode } from 'react';
import {
  Provider,
  Root,
  Trigger,
  Portal,
  Content,
  Arrow,
} from '@radix-ui/react-tooltip';

export type TooltipProps = ComponentProps<typeof Root> & {
  children: ReactNode,
  message: String,
}

export const Tooltip = ({
  text,
  children,
}) => (
  <Provider>
    <Root>
      <Trigger asChild>
        { children } 
      </Trigger>
      <Portal>
        <Content>
          <Arrow />
          <p>{ text }</p>
        </Content>
      </Portal>
    </Root>
  </Provider>
);