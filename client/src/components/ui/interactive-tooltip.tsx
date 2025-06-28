import { useState } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

interface InteractiveTooltipProps {
  content: string;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  className?: string;
  showArrow?: boolean;
}

export function InteractiveTooltip({
  content,
  children,
  side = 'top',
  align = 'center',
  className,
  showArrow = true
}: InteractiveTooltipProps) {
  const [open, setOpen] = useState(false);
  
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger asChild>
          <span className="cursor-help">{children}</span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side={side}
            align={align}
            sideOffset={5}
            className={cn(
              'z-50 overflow-hidden rounded-lg bg-purple-900 px-3 py-2 text-sm text-white shadow-xl',
              'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              className
            )}
          >
            {content}
            {showArrow && (
              <Tooltip.Arrow 
                className="fill-purple-900" 
                width={11} 
                height={5}
              />
            )}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

interface AnimatedTooltipProps extends InteractiveTooltipProps {
  delay?: number;
}

export function AnimatedTooltip({ delay = 200, ...props }: AnimatedTooltipProps) {
  return (
    <Tooltip.Provider delayDuration={delay} skipDelayDuration={500}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <span className="inline-flex cursor-help">
            {props.children}
          </span>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side={props.side}
            align={props.align}
            sideOffset={8}
            className={cn(
              'z-50 overflow-hidden rounded-xl bg-gradient-to-br from-purple-800 to-indigo-800 px-4 py-3 text-sm text-white shadow-2xl backdrop-blur-sm',
              'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              'border border-purple-400/20',
              props.className
            )}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm"></div>
              <div className="relative">{props.content}</div>
            </div>
            {props.showArrow && (
              <Tooltip.Arrow 
                className="fill-purple-800 drop-shadow-lg" 
                width={12} 
                height={6}
              />
            )}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}