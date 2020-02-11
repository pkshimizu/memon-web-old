import React from 'react';
import SiteHeader from '../../components/organisms/SiteHeader';
import MarkdownEditor from '../../components/atoms/MarkdownEditor';
import MainTemplate from '../../components/templates/MainTemplate';
import { Memo } from '../../stores/Memos/types';
import ActionButtons from '../../components/molecules/ActionButtons';
import MemoList from '../../components/molecules/MemoList';
import ConfirmDialog from '../../components/organisms/ConfirmDialog';
import { Shortcut } from '../../defines';

interface MainPageProps {
  selectedMemo: Memo | undefined;
  memos: Memo[];
  shortcuts: Shortcut[];
  onClickLogout: () => void;
  onClickAddMemo: () => void;
  onClickRemoveMemo: () => void;
  onSubmitRemoveMemo: () => void;
  onSelectMemo: (memo: Memo) => void;
  onChangeMemoContent: (content: string) => void;
  openRemoveConfirm: boolean;
  onCloseRemoveConfirm: () => void;
}

const MainPage: React.FC<MainPageProps> = props => {
  const {
    selectedMemo,
    memos,
    shortcuts,
    onClickLogout,
    onClickAddMemo,
    onClickRemoveMemo,
    onSubmitRemoveMemo,
    onSelectMemo,
    onChangeMemoContent,
    openRemoveConfirm,
    onCloseRemoveConfirm,
  } = props;
  return (
    <div>
      <MainTemplate
        header={<SiteHeader onClickLogout={onClickLogout} />}
        buttons={<ActionButtons onClickAdd={onClickAddMemo} onClickRemove={onClickRemoveMemo} />}
        list={
          <MemoList
            memos={memos}
            selectedMemoUuid={selectedMemo === undefined ? undefined : selectedMemo.uuid}
            onSelectMemo={onSelectMemo}
          />
        }
        body={
          <MarkdownEditor
            content={selectedMemo === undefined ? '' : selectedMemo.content}
            keyBinding={'vim'}
            onChangeContent={onChangeMemoContent}
            focus={true}
            shortcuts={shortcuts}
          />
        }
      />
      <ConfirmDialog
        open={openRemoveConfirm}
        onClose={onCloseRemoveConfirm}
        title={'Remove Memo'}
        message={'Do you really want to delete memo?'}
        submitLabel={'Remove'}
        onSubmit={onSubmitRemoveMemo}
      />
    </div>
  );
};

export default MainPage;
